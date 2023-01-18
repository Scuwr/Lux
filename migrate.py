import redis
from datetime import datetime

r = redis.Redis(port=6397)

def delete_all(pattern):
    allkeys = [key.decode('utf-8') for key in r.keys()]
    remove_keys = []

    for key in allkeys:
        if key.startswith(pattern):
            remove_keys.append(key)

    with r.pipeline() as pipe:
        for key in remove_keys:
            pipe.delete(key)
        pipe.execute()

def migrate(database, execute):
    usernames = []
    stories = []

    annotation_keys =[key.decode('utf-8') for key in r.hkeys("v0:userAnnotations")]
    story_keys = [key.decode('utf-8') for key in r.hkeys("v0:story")]
    annotations = r.hgetall("v0:userAnnotations")

    # TIME FORMAT
    # YYYY-MM-DDTHH:mm:ss.sssZ
    dt_string = datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")

    # Get Usernames from annotations
    for key in annotation_keys:
        name = key.split(':')[0]
        if name not in usernames:
            usernames.append(name)

    # Get Story text
    enum_stories = ""
    for story_id in story_keys:
        story = r.hget("v0:story", story_id)
        stories.append(story)
        enum_stories += f'{story_id} '

    while(execute):
        # FORMAT
        # users:userid(int) -> username(str) password(str) privilege(int) update(bool)
        # assignments:userid(int) -> storyids(set)
        with r.pipeline() as pipe:
            for i in range(len(usernames)):
                pipe.hset(f'{database}:users', i, f'{database}:users:{i}')
                pipe.hset(f'{database}:users:{i}', 'username', usernames[i])
                pipe.hset(f'{database}:users:{i}', 'password', "")
                pipe.hset(f'{database}:users:{i}', 'privilege', 0)
                pipe.hset(f'{database}:users:{i}', 'update', 0)

                pipe.hset(f'{database}:assignments', i, f'{database}:assignments:{i}')
                pipe.sadd(f'{database}:assignments:{i}', enum_stories)
            pipe.execute()

        # FORMAT
        # stories:storyid(int) -> storytext(str) update(bool)
        with r.pipeline() as pipe:
            for i in range(len(story_keys)):
                pipe.hset(f'{database}:stories', story_keys[i], f'{database}:stories:{story_keys[i]}')
                pipe.hset(f'{database}:stories:{story_keys[i]}', 'storytext', stories[i])
                pipe.hset(f'{database}:stories:{story_keys[i]}', 'update', 0)
            pipe.execute()

        # FORMAT
        # annotations:userid:storyid -> dateassigned(date) datemodified(date) priority(int) annotations(json) update(bool)
        with r.pipeline() as pipe:
            for key in annotation_keys:
                name, storyid = key.split(':')
                userid = usernames.index(name)
                pipe.hset(f'{database}:annotations:{userid}:{storyid}', 'annotation', annotations[bytes(name + ":" + storyid, 'utf-8')])
                pipe.hset(f'{database}:annotations:{userid}:{storyid}', 'dateassigned', f'{dt_string}')
                pipe.hset(f'{database}:annotations:{userid}:{storyid}', 'datemodified', f'{dt_string}')
                pipe.hset(f'{database}:annotations:{userid}:{storyid}', 'priority', 0)
                pipe.hset(f'{database}:annotations:{userid}:{storyid}', 'update', 0)
            pipe.execute()

    print(f'Executed at: {dt_string}')
#delete_all("v1:")
migrate("v1", False)