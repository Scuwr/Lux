import pandas as pd
import os

os.chdir('./ASRS_Picker')

selected = pd.read_csv('ACN_Picked.csv')

txt = 'let arr = []\n'

for i in range(40,50):
    txt += 'arr = arr.concat(`'
    txt += '\nID: ' + str(selected.iloc[i]['ACN']) + '\n\n';
    txt += str(selected.iloc[i]['Report']) + '\n`)\n\n'


txt += 'for (s of arr){\n'
txt += '\tlet k = await app.mainService.storyAdd(s).toPromise()\n'
txt += '\tconsole.log(k)\n'
txt += '}'

print(txt)
with open('storyArray.js', 'w') as f:
    f.write(txt)