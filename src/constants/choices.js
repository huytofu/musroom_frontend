let propertyChoices = {
  'cap-shape': [
    {text: 'bell', value: 'b'},
    {text: 'conical', value: 'c'},
    {text: 'convex', value: 'x'},
    {text: 'flat', value: 'f'},
    {text: 'knobbed', value: 'k'},
    {text: 'sunken', value: 's'},
    {text: 'missing/none/others', value: '0'},
  ],
  'cap-surface': [
    {text: 'fibrous', value: 'f'},
    {text: 'grooves', value: 'g'},
    {text: 'scaly', value: 'y'},
    {text: 'smooth', value: 's'},
    {text: 'missing/none/others', value: '0'},
  ],
  'cap-color': [
    // brown=n,buff=b,cinnamon=c,gray=g,green=r,pink=p,purple=u,red=e,white=w,yellow=y
    {text: 'brown', value: 'n'},
    {text: 'buff', value: 'b'},
    {text: 'cinnamon', value: 'c'},
    {text: 'gray', value: 'g'},
    {text: 'green', value: 'r'},
    {text: 'pink', value: 'p'},
    {text: 'purple', value: 'u'},
    {text: 'red', value: 'e'},
    {text: 'white', value: 'w'},
    {text: 'yellow', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'odor': [
    // almond=a,anise=l,creosote=c,fishy=y,foul=f,musty=m,none=n,pungent=p,spicy=s
    {text: 'almond', value: 'a'},
    {text: 'anise', value: 'l'},
    {text: 'creosote', value: 'c'},
    {text: 'fishy', value: 'y'},
    {text: 'foul', value: 'f'},
    {text: 'musty', value: 'm'},
    {text: 'none', value: 'n'},
    {text: 'pungent', value: 'p'},
    {text: 'spicy', value: 's'},
    {text: 'missing/none/others', value: '0'},
  ],
  'gill-attachment': [
    // attached=a,descending=d,free=f,notched=n
    {text: 'attached', value: 'a'},
    {text: 'descend', value: 'd'},
    {text: 'free', value: 'f'},
    {text: 'notched', value: 'n'},
    {text: 'missing/none/others', value: '0'},
  ],
  'gill-spacing': [
    // close=c,crowded=w,distant=d
    {text: 'close', value: 'c'},
    {text: 'crowded', value: 'w'},
    {text: 'distant', value: 'd'},
    {text: 'missing/none/others', value: '0'},
  ],
  'gill-size': [
    // broad=b,narrow=n
    {text: 'broad', value: 'b'},
    {text: 'narrow', value: 'n'},
    {text: 'missing/none/others', value: '0'},
  ],
  // black=k,brown=n,buff=b,chocolate=h,gray=g,green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y
  'gill-color': [
    {text: 'black', value: 'k'},
    {text: 'brown', value: 'n'},
    {text: 'buff', value: 'b'},
    {text: 'chocolate', value: 'h'},
    {text: 'gray', value: 'g'},
    {text: 'green', value: 'r'},
    {text: 'orange', value: 'o'},
    {text: 'pink', value: 'p'},
    {text: 'purple', value: 'u'},
    {text: 'red', value: 'e'},
    {text: 'white', value: 'w'},
    {text: 'yellow', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'stalk-shape': [
    // enlarging=e,tapering=t
    {text: 'enlarging', value: 'e'},
    {text: 'tapering', value: 't'},
    {text: 'missing/none/others', value: '0'},
  ],
  // bulbous=b,club=c,cup=u,equal=e,rhizomorphs=z,rooted=r,missing=?
  'stalk-root': [
    {text: 'bulbous', value: 'b'},
    {text: 'club', value: 'c'},
    {text: 'cup', value: 'u'},
    {text: 'equal', value: 'e'},
    {text: 'rhizomorphs', value: 'z'},
    {text: 'rooted', value: 'r'},
    {text: 'missing/none/others', value: '0'},
  ],
  // fibrous=f,scaly=y,silky=k,smooth=s
  'stalk-surface-above-ring': [
    {text: 'fibrous', value: 'f'},
    {text: 'scaly', value: 'y'},
    {text: 'silky', value: 'k'},
    {text: 'smooth', value: 's'},
    {text: 'missing/none/others', value: '0'},
  ],
  'stalk-surface-below-ring': [
    {text: 'fibrous', value: 'f'},
    {text: 'scaly', value: 'y'},
    {text: 'silky', value: 'k'},
    {text: 'smooth', value: 's'},
    {text: 'missing/none/others', value: '0'},
  ],
  'stalk-color-above-ring': [
    // brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y
    {text: 'brown', value: 'n'},
    {text: 'buff', value: 'b'},
    {text: 'cinnamon', value: 'c'},
    {text: 'gray', value: 'g'},
    {text: 'orange', value: 'o'},
    {text: 'pink', value: 'p'},
    {text: 'red', value: 'e'},
    {text: 'white', value: 'w'},
    {text: 'yellow', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'stalk-color-below-ring': [
    // brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y
    {text: 'brown', value: 'n'},
    {text: 'buff', value: 'b'},
    {text: 'cinnamon', value: 'c'},
    {text: 'gray', value: 'g'},
    {text: 'orange', value: 'o'},
    {text: 'pink', value: 'p'},
    {text: 'red', value: 'e'},
    {text: 'white', value: 'w'},
    {text: 'yellow', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'veil-type': [
    // partial=p,universal=u
    {text: 'partial', value: 'p'},
    {text: 'universal', value: 'u'},
    {text: 'missing/none/others', value: '0'},
  ],
  // brown=n,orange=o,white=w,yellow=y
  'veil-color': [
    {text: 'brown', value: 'n'},
    {text: 'orange', value: 'o'},
    {text: 'white', value: 'w'},
    {text: 'yellow', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'ring-number': [
    // none=n,one=o,two=t
    {text: 'none', value: 'n'},
    {text: 'one', value: 'o'},
    {text: 'two', value: 't'},
    {text: 'missing/none/others', value: '0'},
  ],
  'ring-type': [
    // cobwebby=c,evanescent=e,flaring=f,large=l,none=n,pendant=p,sheathing=s,zone=z
    {text: 'cowebby', value: 'c'},
    {text: 'evanescent', value: 'e'},
    {text: 'flaring', value: 'f'},
    {text: 'large', value: 'l'},
    {text: 'none', value: 'n'},
    {text: 'pendant', value: 'p'},
    {text: 'sheathing', value: 's'},
    {text: 'zone', value: 'z'},
    {text: 'missing/none/others', value: '0'},
  ],
  'spore-print-color': [
    // black=k,brown=n,buff=b,chocolate=h,green=r,orange=o,purple=u,white=w,yellow=y
    {text: 'black', value: 'k'},
    {text: 'brown', value: 'n'},
    {text: 'buff', value: 'b'},
    {text: 'chocolate', value: 'h'},
    {text: 'green', value: 'r'},
    {text: 'orange', value: 'o'},
    {text: 'purple', value: 'u'},
    {text: 'white', value: 'w'},
    {text: 'yellow', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'population': [
    // abundant=a,clustered=c,numerous=n,scattered=s,several=v,solitary=y
    {text: 'abundant', value: 'a'},
    {text: 'clustered', value: 'c'},
    {text: 'numerous', value: 'n'},
    {text: 'scattered', value: 's'},
    {text: 'several', value: 'v'},
    {text: 'solitary', value: 'y'},
    {text: 'missing/none/others', value: '0'},
  ],
  'habitat': [
    // grasses=g,leaves=l,meadows=m,paths=p,urban=u,waste=w,woods=d
    {text: 'grasses', value: 'g'},
    {text: 'leaves', value: 'l'},
    {text: 'meadows', value: 'm'},
    {text: 'paths', value: 'p'},
    {text: 'urban', value: 'u'},
    {text: 'waste', value: 'w'},
    {text: 'wood', value: 'd'},
    {text: 'missing/none/others', value: '0'},
  ]
}

module.exports = propertyChoices;