import pandas as pd
import random
import os

os.chdir('./ASRS_Picker')

df = pd.read_csv('ASRS_DBOnline_2022.csv')

narrative = df.columns.get_loc('Report 1')
report = df.iloc[:, [0,narrative]]
report = report.set_axis(['ACN', 'Report'], axis=1)

selected = pd.read_csv('ACN_Picked.csv')

recover = ['1910971', '1928289', '1869248', '1897945', '1911670', '1898723', '1925227', '1913323', '1894412', '1914340', '1866560', '1896644', '1917476', '1906763', '1911710', '1932538', '1904979', '1867184', '1869594', '1917561']

r = 0
acn = ''
for x in range(20):
    while True:
        r = report.index[report['ACN'] == recover[x]]
        print(r)
        r = r[0]

        acn = report.iloc[r]['ACN']
        if(acn not in selected['ACN'].values.tolist()):
            break
    
    selected = pd.concat([selected, pd.DataFrame({'ACN': [int(acn)], 'Report': [report.iloc[r]['Report']]})], ignore_index=True)

print(selected)
selected.to_csv('ACN_Picked.csv', index=False)
