import redis

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

def migrate(database):
    usernames = []
    stories = []

    annotation_keys =[key.decode('utf-8') for key in r.hkeys("v0:userAnnotations")]
    story_keys = [key.decode('utf-8') for key in r.hkeys("v0:story")]

    '''
    # Get Usernames from annotations
    for key in annotation_keys:
        name = key.split(':')[0]
        if name not in usernames:
            usernames.append(name)

    # FORMAT
    # user:userid(int) username(str) password(str) privilege(int) update(bool)
    with r.pipeline() as pipe:
        for i in range(len(usernames)):
            pipe.hset(f'{database}:users', i, f'{database}:users:{i}')
            pipe.hset(f'{database}:users:{i}', 'username', usernames[i])
            pipe.hset(f'{database}:users:{i}', 'password', "")
            pipe.hset(f'{database}:users:{i}', 'privilege', 0)
            pipe.hset(f'{database}:users:{i}', 'update', 0)
        pipe.execute()
    '''

    # Get Story text
    for story_id in story_keys:
        story = r.hget("v0:story", story_id)
        stories.append(story)

    # FORMAT
    # stories:storyid(int) storytext(str) update(bool)
    with r.pipeline() as pipe:
        for i in range(len(story_keys)):
            pipe.hset(f'{database}:stories', i, f'{database}:stories:{i}')
            pipe.hset(f'{database}:stories:{i}', 'storytext', stories[i])
            pipe.hset(f'{database}:stories:{i}', 'update', 0)
        pipe.execute()

delete_all("test:")
migrate("test")