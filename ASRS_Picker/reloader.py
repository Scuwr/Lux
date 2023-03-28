import pandas as pd
import random
import os

os.chdir('./ASRS_Picker')

df = pd.read_csv('ASRS_DBOnline_2022.csv')

narrative = df.columns.get_loc('Report 1')
report = df.iloc[:, [0,narrative]]
report = report.set_axis(['ACN', 'Report'], axis=1)

selected = pd.read_csv('ACN_Picked.csv')

recover = ['1876957', '1923811', '1906142', '1924933', '1866852', '1902208', '1867635', '1921992', '1893342', '1891341', '1924245', '1923584', '1890108', '1903474', '1899133', '1910439', '1917283', '1885887', '1924053', '1894573']

r = 0
acn = ''
for x in range(20):
    while True:
        r = report.index[report['ACN'] == recover[x]]
        print(f'{x}: {r}')
        r = r[0]

        acn = report.iloc[r]['ACN']
        if(acn not in selected['ACN'].values.tolist()):
            break
    
    selected = pd.concat([selected, pd.DataFrame({'ACN': [int(acn)], 'Report': [report.iloc[r]['Report']]})], ignore_index=True)

print(selected)
selected.to_csv('ACN_Picked.csv', index=False)
