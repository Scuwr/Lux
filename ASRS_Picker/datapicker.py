import pandas as pd
import os

os.chdir('./ASRS_Picker')

selected = pd.read_csv('ACN_Picked.csv')

userid = 6
idx = 400
amt = 20

txt = 'let arr = []\n'

for i in range(idx, idx+amt):
    txt += 'arr = arr.concat(`'
    txt += '\nID: ' + str(selected.iloc[i]['ACN']) + '\n\n';
    txt += str(selected.iloc[i]['Report']) + '\n`)\n\n'


txt += 'for (s of arr){\n'
txt += '\tlet k = await app.mainService.storyAdd(s).toPromise()\n'
txt += '\tconsole.log(k)\n'
txt += '}\n\n'

txt += 'userid = ' + str(userid) + '\n'
txt += 'for (let i = ' + str(idx) + '; i < ' + str(idx+amt) + '; i++){\n'
txt += '\tlet k = await app.mainService.storyAddAssignment(userid, i+1).toPromise()\n'
txt += '\tconsole.log(k)\n'
txt += '}\n\n'

txt += 'for (let i = ' + str(idx-amt) + '; i < ' + str(idx) + '; i++){\n'
txt += '\tlet k = await app.mainService.storyRemAssignment(userid, i+1).toPromise()\n'
txt += '\tconsole.log(k)\n'
txt += '}'

print(txt)
with open('storyArray.js', 'w') as f:
    f.write(txt)