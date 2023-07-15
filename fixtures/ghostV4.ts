/**
 * Download and convert ghost binary data to base64
 */
/*
import ky from 'ky'
const arrayBuffer = await ky.get('https://storage.googleapis.com/download/storage/v1/b/zeepkist-gtr/o/ghosts%2F3a40f4ec-4717-4517-b1c0-4509f050d977.bin?generation=1688010987783466&alt=media').arrayBuffer()
const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
*/

const base64 =
  'BAAAACDklggBABABwIgAAPVVAAC+CwAAPGwCAABYObQ8AQCAwewVwj9QikzCRxYAAAAADHMAAFg5ND0AAAAAGAAfFgAAAAAUcwAAAiuHPQAA/f8oAOwV/v///x5zAABYObQ9///5/zoAthX7//3/KHMAAK5H4T3+//P/TACDFfX/+v8ycwAAAisHPvz/7P9fAFgV7P/2/zpzAAAush0++v/k/3EANhXh//L/QHMAAFo5ND74/9r/hAAgFdL/7P9EcwAAhsBKPvb/0P+WABMVv//n/0ZzAACyR2E+8//G/6cADxWn/+H/R3MAAN7Odz7w/7z/uQATFYz/2v9GcwAABSuHPu3/s//JABsVbP/T/0RzAACbbpI+6v+q/9oAJxVH/8v/QnMAADGynT7n/6L/6gAzFR7/wv8/cwAAx/WoPuT/mv/6AEAV8f65/z1zAABdObQ+4P+U/woBSxW//q//OnMAAPN8vz7d/43/GgFUFYj+pP84cwAAicDKPtn/iP8qAVoVTf6Z/zZzAAAfBNY+1f+C/zoBXhUN/oz/NHMAALVH4T7R/33/SgFgFcn9f/8ycwAAS4vsPs3/eP9aAWAVgf1w/zFzAADhzvc+yP9z/2oBXhU0/WH/L3MAADuJAT/E/27/ewFbFeP8UP8ucwAABSsHP7//af+LAVgVjfw//yxzAADPzAw/uv9j/5sBVBUx/Cz/KXMAAJluEj+0/17/qwFRFcv7GP8mcwcAYxAYP6//WP+7AU4VXfsC/yNzEAAtsh0/qv9S/8wBSxXo+uv+HnM0APdTIz+l/0v/3QFIFXP61/4Zc1IAwfUoP6P/RP/uAUUVBPrH/hRzXQCLly4/ov89/wACQhWd+bv+DnNhAFU5ND+j/zb/EgJAFUD5sv4Jc04AH9s5P6L/L/8jAj4V6fim/gRzLwDpfD8/n/8o/zQCPhWR+JP+/3IbALMeRT+Y/yL/RAI+FTH4eP74chQAfcBKP5D/HP9TAj8VyPdW/vByCwBHYlA/hf8W/2ACQRVR9zD+5nIIABEEVj95/xH/bgJCFc32Cf7bcgQA26VbP2z/C/97AkQVPfbj/c5yAwClR2E/X/8G/4gCRBWi9b/9wHIXAG/pZj9T/wH/lQJEFf/0nv2wcjkAOYtsP0n//P6kAkEVXPSD/aBySQADLXI/Qf/2/rMCPRXA83D9kHJhAM3Odz89/+/+xAI4FTHzY/2BcmgAl3B9Pzr/6f7VAjMVsfJb/XNycgAxiYE/Of/j/ucCLRVE8lT9Z3J1ABdahD84/9z++AIoFebxTP1dclYA/SqHPzT/1v4JAyUVkvE+/VJyMwDj+4k/Lf/Q/hgDIxU68ST9R3ImAMnMjD8g/8v+JAMjFdjw/vw5chUAr52PPxH/x/4vAyQVZPDQ/ChyEACVbpI//v7E/jgDJhXc7578E3IIAHs/lT/r/sD+QAMoFUHvbfz7cQsAYRCYP9f+vf5IAygVlO4//N9xKwBH4Zo/xf66/lEDJhXe7Rn8wnE/AC2ynT+2/rX+XQMhFSnt/vulcVsAE4OgP6z+sP5qAxoVf+zv+4lxawD5U6M/pf6q/nkDERXn6+n7cHFwAN8kpj+g/qT+iQMIFWLr5vtZcXYAxfWoP5z+nv6ZA/8U8eri+0ZxeQCrxqs/0y2GwUowtj5kY0DC+BST6tv7NnF7AJGXrj+T/pL+uQPzFEbq0fsncX0Ad2ixP47+jP7JA/AUCOrF+xxxfQBdObQ/iP6G/tgD7RTV6bj7EnF9AEMKtz+B/oD+5wPsFKzpq/sJcXEAKdu5P3j+e/71A+sUiOmd+wJxXwAPrLw/bP52/gIE6xRg6Yz7+XBXAPV8vz9e/nL+DQTsFC/pd/vucEwA203CP07+bv4XBO0U8Ohf++BwRgDBHsU/PP5q/h8E7RSh6Eb7z3BEAKfvxz8p/mf+JwTtFEPoLPu6cFAAjcDKPxf+ZP4vBOsU2ecV+6NwWwBzkc0/CP5g/jkE5xRs5wX7jHBrAFli0D/7/Vz+RQTiFATn+/p1cHAAPzPTP/H9V/5SBNsUpeb2+mFwdwAlBNY/6f1S/l8E1RRS5vT6T3B6AAvV2D/h/Uz+bQTPFAvm8/pAcHsA8aXbP9n9R/57BMoU0eXx+jNwfQDXdt4/0v1C/okExhSi5e76KXB+AL1H4T/J/T3+lwTDFHzl6fogcH4AoxjkP8H9N/6kBMEUXuXk+hlwfgCJ6eY/uP0y/rIEwBRH5d/6FHB/AG+66T+v/S3+vwS/FDTl2voPcHsAVYvsP6X9KP7MBL4UI+XX+gtweAA7XO8/m/0j/tgEvRQU5dP6CHBzACEt8j+P/R/+5AS8FALlz/oDcHEAB/70P4P9Gv7wBLwU6+TK+v1vcADtzvc/d/0W/vsEuxTP5MT69291ANOf+j9r/RH+BwW5FLDkv/rvb3gAuXD9P2D9Df4TBbgUkeS7+uhvewDPIABAVv0I/h8FthR15Lj64W98AEGJAUBN/QP+LAW0FFvkt/rbb30As/ECQET9/v05BbMUReS2+tZvfgAlWgRAPP35/UcFsRQz5Lb60W9+AJfCBUAz/fT9VAWwFCXktvrOb38ACSsHQCv97/1hBa8UGuS2+stvjgB7kwhAJf3p/XAFrhQX5Lj6y2+VAO37CUAi/eP9gAWuFCTkvfrOb6QAX2QLQCL93P2RBa8UROTH+tdvqwDRzAxAJf3V/aMFsBR95Nb65W+1AEM1DkAs/c79twWzFM/k6vr6b7kBtZ0PQCr92v29BZIUNOU2+xtwuQEnBhFAJv36/bkFJRSg5eL7UHCqAZluEkAp/Rn+uAVxExDm0PyRcJYBC9cTQCz9N/65BX8Seebm/dhwkQF9PxVASP1m/roFQxHZ5q/+I3GIAe+nFkBn/Z/+ugW5Dy/nBf9wcYYBYRAYQH791f65BeYNeuf8/r1xgwHTeBlAjP0F/7gF1Qu656/+BnKCAUXhGkCT/S3/uAWTCfHnOP5GcoABt0kcQJX9SP+6BS8HIOir/XpygAEpsh1Ak/1Y/74FugRK6Bn9oHKAAZsaH0B6/Wr/wwVQAnHo5Py6cn4BDYMgQEv9i//OBR0AlOh7/ctydwF/6yFAMP2h/+UFM/6x6I/+0nJyAfFTI0Ap/bb/DQav/MTouf/PcmcBY7wkQED95f9OBu77w+hJAMlyZQHVJCZARP0OAIUG0fut6GgAxHJrAUeNJ0A3/S0AsQYo/IfoTwC/cnEBufUoQCT9QgDTBsb8WegmALpyeAErXipAKJejwexk87829iDChv0r6AIAtnJ6AZ3GK0D6/FQABgdM/gLo7f+xcnwBDy8tQOf8UwAdBwL/3+fl/6tyfQGBly5A1fxOADQHnf/C5+f/pnJ9AfP/L0DC/EUAVAcUAKrn7v+hcn4BZWgxQLD8OwB1B2kAl+f4/51yfgHX0DJAnfwuAJoHngCI5wAAmnJ/AUk5NECL/CIAwAe3AHznBQCXcn8Bu6E1QHb8FQDqB7wAc+cIAJVyfwEtCjdAYfwKABcIsgBt5wgAlHJ/AZ9yOEBL/AEARQifAGfnBwCTcn8BEds5QDX8+v90CIcAY+cGAJJyfwGDQztAH/z0/6QIbwBg5wQAkXJ/AfWrPEAI/PD/1AhaAF7nAgCRcnEBZxQ+QO777v8DCUkAVecDAI9yZQHZfD9AzPvt/y8JOwA05wcAiHI2AUvlQEAU/uP/oAmfAPLofPvOcicBvU1CQJb+EACcCeEAlev39glzFQEvtkNASf5DAIMJzwAv7vLzMXMPAaEeRUAo/ngAfAl3ALDwBfJWcwcBE4dGQHn+jwCQCe3/W/Mj8GtzBQGF70dAaP6uAJ8JNP+h9QXve3MEAfdXSUCX/r4AuQla/q33B+59cwIBacBKQLH+xgDYCXD9Yvk87XVzAQHbKExA4v7IAPwJg/zb+l/sXXMAAU2RTUD7/skAIwqb+wT8kes9cwABv/lOQDH/xwBNCr/65PyP6gxzAAExYlBAW//HAHoK9vlV/WbpzHIAAaPKUUCJ/8oApgo/+Xz9/Od5cgABFTNTQJ3/0wDRCpr4Xv175hpyAAGHm1RAtf/fAPkKA/gX/dDkq3EAAfkDVkC6//EAIAt596f8F+MxcQABa2xXQMz/9gBOCwX3JPxA4ahwAAHd1FhA3v/4AHwLp/ag+0XfDHAAAU89WkDu//sApwta9in7Ht1abwABwaVbQPz//gDQCxz2xvrD2oxuAAEzDl1ABgABAfcL6vV4+jXYnm0AAaV2XkAMAAIBHQzC9Tr6dtWObAABF99fQAwAAwFEDKX1B/qO0lprAAGJR2FACAACAWoMj/XY+YTP/mkAAfuvYkACAP8AkAx+9ar5Ucx0aAABbRhkQP3/9wC0DG71fvnyyLNmAAHfgGVA3v//ANwMafVE+a/F3mQAAVHpZkDA/wgBBw189fn4i8L5YgABw1FoQK3/AwE7DcD1yfh/vwdhAAE1umlAov/wAHINK/au+Ji8El8AAacia0CW/94AqA229qX45bkmXQABGYtsQIv/zwDcDVr3sfhst05bAAGL821Af//DAA8OFfjT+DS1k1kAAf1bb0B2/7IAQg7c+Ab5PrP7VwABb8RwQHX/lwB3Dpn5L/mKsYlWAAHhLHJAdP+MAKkOVfpW+Q6wO1UAAVOVc0Bu/5UA0w4C+235xK4OVAABxf10QG//ogD8Dpf7efm6rRNTDAE3ZnZAgf/BABsP8/uT+SSthFIXAanOd0CZ/+MAQw8Y/LH5Cq1uUiwBGzd5QLL/BQF9Dw/8yPlkrcpSNgGNn3pAwv8aAb0P3fvU+Qmua1NFAf8HfEDK/yQB/w+H+9X51a4uVEYBcXB9QMr/LwFOEBf7yfm9rwRVJgHj2H5AJ8CzwQAFa79JwbbBlPqz+c+w+VUcAasggECv/1kB3RAI+pD5/bEAVw4B5dSAQJ7/agEUEXb5ZflCsxJYCgEfiYFAi/95AUAR4vgy+Zy0LFkFAVk9gkB3/4kBaxFP+Pz4CLZKWgQBk/GCQGH/mQGVEb/3w/iEt2xbAgHNpYNASP+qAb8RNfeJ+A+5jlwBAQdahEAu/7oB6BGz9lD4p7qwXQABQQ6FQBL/ygEREjr2GfhKvNBeAAF7woVA8/7aAToSy/Xk9/i97V8AAbV2hkDT/ugBYhJn9bL3rb8GYQAB7yqHQLH+9gGLEg71gfdpwRhiAAEp34dAjv4CArMSwfRT9yrDJWMAAWOTiEBp/gwC3BKA9Cb37sQpZAABnUeJQEP+FQIEE0r0+Pa1xiZlAAHX+4lAHP4dAisTHPTN9oLIHWYAARGwikD4/SgCThPp87X2bMoZZwABS2SLQND9LAJ1E7rznPZczA1oAAGFGIxAqv0mAqETmfOF9kXO9GgAAb/MjECR/REC1hOW84/2JdDTaQAB+YCNQH39AQIOFLfzp/Ye0rhqAAEzNY5Aa/3wAUgU/vPF9jjUpGsAAW3pjkBc/d0BgxRs9OD2etaWbAABp52PQE/9xwHAFAD19Pbj2IttAAHhUZBAK/3AAfwUw/Uf95Xbjm4AARsGkUAa/ZYBNxWZ9lj3Kd52bwABVbqRQA39aQFzFX/3mfed4EVwAAGPbpJAA/06AbAVcfjZ9/Hi+3AAAckik0AA/Q0B7RVr+Qv4KuWacQAAA9eTQPj83gAsFmX6LPhh5ypyAAA9i5RA7vysAG0WW/s9+JzprHIAAHc/lUDk/HgArhZP/D343OsfcwAAsfOVQNr8RADyFkD9Lvgg7oRzAADrp5ZA0PwOACwXL/4P+Gjw23MeACVcl0DI/Nb/WRcc/+L3svIkdDAAXxCYQMH8nf+EFwYArff/9F90VQCZxJhAufxj/64X8gBy9073i3RgAtN4mUC3/Cj/1BfVATX3i/mpdG4CDS2aQLj87f7tF60C+vav+7p0cwJH4ZpAuvyy/v0XfAPB9r39v3R4AoGVm0C9/Hj+DhhCBIn2s/+5dHoCu0mcQL/8P/4bGP8EVfaTAat0fAL1/ZxAw/wG/iMYswUj9l4DlXR9Ai+ynUDH/M79JxhfBvP1FgV4dH4CaWaeQMv8lv0pGAMHxvW6BlV0fgKjGp9A0Pxg/ScYnwec9UsILnR/At3On0DU/Cn9JRg1CHT1ywkCdH8CF4OgQNj88/wkGMMITvU5C9NzfwNRN6FA5PzG/CUYUwkt9XUMpHN/A4vroUDx/Jz8JxjlCRD1eA14c4IDxZ+iQP38c/woGHkK9/RKDlBzigP/U6NAB/1J/CoYDgvk9PEOK3OPAzkIpEAQ/SD8KxikC9X0cQ8Kc5cDc7ykQBj99vssGDoMzPTPD+xymwOtcKVAH/3N+ywYzgzJ9A8Q03KgA+ckpkAl/aP7LRhjDcz0NBC9cqIBIdmmQCr9efsvGPwN1fRCEKpyoQFbjadAL/1P+zAYmA7l9DsQmXKgAZVBqEAz/SX7MRg3D/r0IRCKcpsBz/WoQDf9+/oyGNYPFPX1D31ymAEJqqlANALSwarAyL/SYSdBdhAy9bkPcnKSAUNeqkA//ab6MxgVEVT1bw9ocooBfRKrQEL9e/ozGLIRePUWD19yiAG3xqtARf1R+jMYTRKe9bIOV3KEAfF6rEBI/Sb6MhjlEsX1Qg5QcoABKy+tQEr9+/kxGHoT7PXKDUlyYwFl461ATP3R+TAYCRQP9koNQ3JLAZ+XrkBN/ab5LxiVFCr2www8cioB2UuvQE79e/kuGBsVOfY3DDRyHgETALBATv1Q+SwYnBU69qYLK3IQAU20sEBd/Tr5JRj6FTv2tgowcgkBh2ixQJX9efkAGKsVVvZkCHNyBwDBHLJAmf0I+qIX1xNl9mUF93IDAPvQskAv/m775BayDp/2Y//hcwoANYWzQPb8QPwRFqoGRvYW/pN0LABvObRAkvz7/EUW1P/X9bf9uXRAAKnttEDf+1H/NBdS/Vj1cf+rdFwA46G1QDD82gDXF3n90/QW/590ZQAdVrZA7Pt0AeUXBv5I9Ff/lHRxAFcKt0DM+7oB2xeF/sHzuv+JdG0Akb63QLf7zgHLF9T+PfMKAHx0TQDLcrhAnvvHAbsX/v6z8kQAbHQ5AAUnuUB9+6kBrBcT/xfyagBadDIAP9u5QFT7egGfFx7/ZPGNAER0KwB5j7pAJPtFAZAXJ/+X8L4AKXQ4ALNDu0D0+hABgRcu/7Xv9wAKdFkA7fe7QMn62gBzFzb/y+4wAehzYwAnrLxAnvqlAGUXP//h7WQBxHNwAGFgvUB0+m8AVxdI//7skQGfc3QAmxS+QEn6OgBHF1P/Jey1AXpzeQDVyL5AHPoEADcXX/9X69IBVXN6AA99v0Du+c//Jhdt/5bq5QEyc3wASTHAQL/5mf8UF37/3+nsAQ9zfQCD5cBAmfls/wYXof806bkB73J8AL2ZwUB6+Uf/+hbZ/5PoHAHRcngA903CQE/5Lv/oFhoA+udCALJyawAxAsNAAPk3/8UWSwBf58b/kXJkAGu2w0Cx+Ez/oRZoAL/mnP9uclkApWrEQG74af+AFnIAJuat/0xyVQDfHsVANPiL/2EWbgCZ5d7/LHJZABnTxUD+967/QxZfABblGQANcmMAU4fGQMz30P8nFkcAnuRQAPFxcACNO8dAnffv/wwWKwAx5HkA1nF3AMfvx0Bu9wkA8hUOAM3jkQC+cXkAAaTIQED3HgDYFfH/ceOZAKdxewA7WMlAEvctAL8V1f8d45QAkXF9AHUMykDl9jcApxW+/83ihgB9cX0Ar8DKQLf2PACOFar/geJ0AGlxfgDpdMtAivY8AHYVnP834mAAVnF+ACMpzEBe9jgAXxWT/+7hTQBDcX8AXd3MQDP2MQBIFZD/p+E8ADBxfwCXkc1ACvYoADIVkv9j4S4AHXGFANFFzkDk9R4AHRWY/yLhJAAMcYwAC/rOQMH1FAAKFaH/6uAcAPxwnQBFrs9AofUKAPgUrf++4BYA8HClAH9i0ECF9QIA6BS6/6TgEgDpcLUAuRbRQG71/P/bFMj/oOAPAOhwuwDzytFAWvX2/88U1f+24AwA7nDAAC1/0kBL9fL/xhTh/+fgCgD8cLYAZzPTQD718P++FOv/L+EIABBxqACh59NAaI0PwhxdXsB8hTVC8/+G4QgAJ3GVANub1EAk9fD/rhT4/+LhCQBAcY8AFVDVQBn18v+nFPr/PeILAFhxhwBPBNZAEPX0/6IU+v+T4gwAbnGFAIm41kAJ9ff/nRT4/+LiDQCDcYIAw2zXQAT1+v+bFPb/K+MMAJVxgQD9INhAAvX8/5kU8/9t4wkApnF8ADfV2EAB9f//mBTw/6fjBgC0cXgAcYnZQAH1AACYFOz/2eMCAMFxeACrPdpAAvUCAJkU6f8B5P//y3F6AOXx2kAD9QMAmhTm/yLk/P/TcXwAH6bbQAb1BACbFOT/PuT5/9pxfQBZWtxACvUEAJ4U4/9V5Pb/33F+AJMO3UAP9QQAoBTi/2nk9P/kcX8AzcLdQBT1BACjFOH/feTy/+lxiwAHd95AHPUDAKcU4v+T5PD/7nGhAEEr30An9QMArRTj/7Xk7P/2cawAe9/fQDb1AgC0FOX/6uTo/wNyvAC1k+BASPUBALwU5/825eL/FXK/AO9H4UBd9QAAxhTq/5zl3P8tcqQAKfzhQHH1AADOFOz/FObY/0hymgBjsOJAg/UAANcU7f+T5tf/ZXKNAJ1k40CV9f//3xTu/xPn2P+BcokA1xjkQKf1///nFO7/j+fb/5xyhQARzeRAu/X///AU7v8F6N3/tXKDAEuB5UDQ9f//+RTu/3To3//LcoIAhTXmQOf1//8CFe7/3Ojf/+FygQC/6eZA/vX//wwV7v886d//9HKAAPmd50AX9v//FhXu/5fp3v8Gc4AAM1LoQDD2AAAgFe7/6+nc/xZzfwBtBulASvYAACsV7v866tr/JXN/AKe66UBk9gAANRXu/4Tq2f8zc38A4W7qQH72AAA/Fe7/yerX/0BzfwAbI+tAmPYAAEkV7f8L69f/THN+AFXX60Cy9gAAUxXt/0jr1v9Xc3sAj4vsQMv2AABcFe3/gevW/2FzeQDJP+1A4/YAAGUV7P+169f/anN6AAP07UD79gAAbhXs/+Pr2P9yc3wAPajuQBP3AAB2Fez/DuzZ/3pzfQB3XO9AK/cAAH8V6/827Nr/gHN+ALEQ8EBC9wAAhxXr/1vs2/+Hc34A68TwQFj3AACPFev/f+zc/41zfwAlefFAbvcAAJcV6/+i7Nz/k3N/AF8t8kCD9wAAnhXr/8Ps3f+Yc38AmeHyQJj3AAClFev/5Oze/55zfwDTlfNArPcAAKwV6/8E7d7/o3N/AA1K9EC/9wAAshXr/yPt3/+oc38AR/70QNL3AAC5Fev/Qe3g/61zfwCBsvVA5PcAAL8V6/9e7eH/snN/ALtm9kD29wAAxBXq/3rt4v+2c4AA9Rr3QAf4AADKFer/lu3j/7tzhAAvz/dAGPgAANAV6v+z7eT/v3OGAGmD+EAq+AAA1RXq/9Ht5P/Ec4kAozf5QDv4AADbFer/8+3k/8lziwDd6/lATfgAAOAV6v8b7uP/0HOOABeg+kBg+AAA5hXq/0fu4v/Wc48AUVT7QHL4AADsFer/eu7h/95ziwCLCPxAhPgAAPEV6v+w7uH/5nOFAMW8/ECW+AAA9hXq/+ju4f/vc4MA/3D9QKb4AAD7Fer/H+/i//dzggA5Jf5AjuZJwmCaXsDw65tC6v9U7+P//nOAAHPZ/kDI+AAABRbq/4fv5P8GdIAArY3/QNn4AAAKFun/t+/l/wx0gADzIABB6fgAAA8W6f/l7+b/E3R/AA97AEH6+AAAFBbp/xHw5v8ZdH8AK9UAQQv5AAAYFun/OfDm/x50fwBHLwFBHPkAAB0W6f9g8Ob/JHR/AGOJAUEs+QAAIRbp/4Xw5v8pdH8Af+MBQTz5AAAmFun/qPDm/y10fwCbPQJBTfkAACoW6f/K8Ob/MnR/ALeXAkFc+QAALhbp/+nw5/82dH8A0/ECQWz5AAAyFun/CPHn/zp0fwDvSwNBe/kAADcW6f8l8ef/PXR/AAumA0GK+QAAOhbp/0Hx6P9BdH8AJwAEQZj5AAA+Fun/XPHo/0R0fwBDWgRBp/kAAEIW6f928en/SHSCAF+0BEG1+QAARRbp/5Dx6f9LdIEAew4FQcP5AABJFuj/qvHp/050gACXaAVB0fkAAEwW6P/D8er/UXSAALPCBUHe+QAAUBbo/93x6v9UdH8AzxwGQev5AABTFuj/9fHr/1d0fwDrdgZB9/kAAFYW6P8N8uv/WnR/AAfRBkED+gAAWRbo/yTy7P9ddH8AIysHQQ/6AABcFuj/OvLs/190fwA/hQdBG/oAAF4W6P9P8u3/YnR/AFvfB0Em+gAAYRbo/2Py7f9kdH8AdzkIQTH6AABkFuj/d/Lu/2d0fwCTkwhBPPoAAGYW6P+K8u7/aXR/AK/tCEFG+gAAaRbo/53y7/9rdH8Ay0cJQVD6AABrFuj/rvLv/210fwDnoQlBWvoAAG0W6P/A8u//b3R/AAP8CUFk+gAAcBbo/9Dy8P9xdH8AH1YKQW36AAByFuj/4PLw/3N0fwA7sApBdvoAAHQW5//w8vD/dHR/AFcKC0F/+gAAdhbn///y8f92dH8Ac2QLQYj6AAB4Fuf/DfPx/3h0fwCPvgtBkPoAAHoW5/8b8/L/eXR/AKsYDEGY+gAAexbn/ynz8v97dHsAx3IMQZ/6AAB9Fuf/NPPz/3x0bQDjzAxBo/oAAH4W5/848/T/fHRbAP8mDUGk+gAAfhbn/y3z+P97dFUAG4ENQaL6AAB9Fub/DvP9/3h0UAA32w1BnfoAAHwW5f/b8gEAcnRJAFM1DkGV+gAAehbl/5HyBwBqdEcAb48OQYv6AAB3FuT/MfIMAF50RgCL6Q5Bf/oAAHMW5P+78RAAUHRHAKdDD0Fv+gAAbhbj/zHxFQA/dFIAw50PQV76AABpFuL/mfAYACt0ZwDf9w9BTfoAAGQW4v/77xkAFnRuAPtREEE8+gAAXxbi/2DvGQAAdHMAF6wQQSn6AABaFuL/yu4YAOpzeQAzBhFBFPoAAFMW4v897hcA1XN7AE9gEUH++QAATBbi/7rtFwDAc3wAa7oRQeb5AABEFuL/P+0YAK1zfQCHFBJBzPkAADwW4f/O7BkAmnN+AKNuEkGx+QAAMhbh/2XsGwCIc34Av8gSQZb5AAApFuD/A+wdAHhzfwDbIhNBefkAAB8W4P+n6x8AaHN/APd8E0Fd+QAAFBbf/1LrIQBZc38AE9cTQUD5AAAKFt//A+siAEpzfQAvMRRBnkZvwrybXsCpceBC3/+36iMAPHN4AEuLFEEF+QAA8xXe/2zqJQAuc2AAZ+UUQeT4AADmFd7/GeonAB9zWgCDPxVBwPgAANcV3f+66SoADHNUAJ+ZFUGb+AAAxxXc/0rpLwD3ck4Au/MVQXT4AAC2Fdv/yegzAN1yTADXTRZBTPgAAKQV2v826DcAv3JOAPOnFkEj+AAAkBXZ/5LnOgCccloADwIXQfr3AAB9Fdj/4+Y8AHZyZQArXBdB0/cAAGoV2P8y5jwAT3JyAEe2F0Gr9wAAVhXX/4PlOgAncnUAYxAYQYT3AABDFdj/2+Q4AP9xegB/ahhBXPcAAC8V2P875DYA2XF7AJvEGEE09wAAGRXY/6XjNAC0cXwAtx4ZQQv3AAAEFdf/F+MzAJBxfgDTeBlB4vYAAO0U1/+T4jMAbnF+AO/SGUG49gAA1hTX/xbiMwBNcX4ACy0aQY/2AAC/FNb/oeE0AC5xfwAnhxpBZ/YAAKcU1v8z4TUAEHF/AEPhGkE+9gAAkBTV/8vgNQD0cH8AXzsbQRf2AAB4FNX/aOA1ANhwgAB7lRtB8PUAAGAU1f8M4DUAvnCCAJfvG0HK9QAASRTV/7XfNACmcIQAs0kcQab1AAAzFNb/Zt8yAI9whwDPoxxBg/UAAB0U1v8e3zAAenCJAOv9HEFh9QAACBTX/9/eLgBncIkAB1gdQUH1AADzE9f/p94sAFdwiAAjsh1BIvUAAN8T2P923ioASHCEAD8MHkED9QAAyxPY/0reKAA7cIMAW2YeQeX0AAC3E9n/Id4mAC9wggB3wB5ByPQAAKQT2f/63SUAI3CAAJMaH0Gt9AAAkhPZ/9TdJAAYcIAAr3QfQZL0AACAE9n/r90jAAxwgADLzh9BefQAAG8T2v+L3SIAAXB/AOcoIEFh9AAAXhPa/2fdIQD2b38AA4MgQUn0AABOE9v/Q90fAOtvfwAf3SBBM/QAAD8T2/8g3R0A4G9/ADs3IUEe9AAAMBPc//7cHADVb38AV5EhQQn0AAAiE9z/3NwaAMtvfwBz6yFB9fMAABQT3P+73BkAwG9/AI9FIkHi8wAABxPd/5vcFwC2b38Aq58iQdDzAAD6Et3/e9wWAKxvggDH+SJBvvMAAO4S3v9d3BQAom+GAONTI0Gv8wAA4xLe/0LcEwCab40A/60jQaDzAADYEt//LtwRAJRvjwAbCCRBlPMAANAS4P8i3A4AkG+TADdiJEGJ8wAAyBLh/x/cCwCPb5MAU7wkQX/zAADBEuL/JdwIAJFvjABvFiVBdfMAALoS4v8y3AYAlW+IAItwJUFr8wAAsxLj/0LcBACab4YAp8olQWLzAACtEuP/VNwEAKBvggDDJCZBWvMAAKcS4/9l3AQApW+CAN9+JkFS8wAAoRLj/3XcBACqb4AA+9gmQUvzAACcEuP/g9wEAK9vgAAXMydBRfMAAJgS4/+P3AMAs29/ADONJ0FA8wAAlBLk/5ncAwC2b3sAT+cnQTrzAACQEuT/oNwCALhveABrQShBNfMAAI0S5P+j3AEAuW9yAIebKEEv8wAAiRLk/5/cAQC3b28Ao/UoQSnzAACEEuT/k9wCALRvbAC/TylBIaKYwsiYXsBmvQ5D5P9/3AMArW9qANupKUEb8wAAehLj/2HcBACkb2cA9wMqQRPzAAB0EuP/OtwFAJdvZQATXipBCvMAAG0S4v8I3AYAh29gAC+4KkEA8wAAZhLi/8vbCAB0b18ASxIrQfTyAABdEuH/g9sKAFxvZwBnbCtB6fIAAFQS4P8y2wwAQW9tAIPGK0Hd8gAASxLg/9zaDQAlb3UAnyAsQdLyAABCEuD/h9oNAAhveQC7eixBxvIAADoS4P802gwA7G57ANfULEG68gAAMBLg/+XZCwDRbncA8y4tQa3yAAAlEuD/mtkLALducAAPiS1BnfIAABkS4P9N2QwAnG5TACvjLUGJ8gAACRLf//bYDwB+bksARz0uQXLyAAD1Edz/jdgVAFhuVwBjly5BW/IAAOER2v8V2BsALW5mAH/xLkFF8gAAzRHZ/5TXHwD+bWwAm0svQS/yAAC6Edj/EdchAM5tdAC3pS9BGvIAAKcR2P+Q1iEAnW13ANP/L0EE8gAAlBHY/xXWHwBubXsA71kwQe7xAACAEdj/oNUeAEFtfAALtDBB1/EAAGsR2f8y1RwAFm19ACcOMUHA8QAAVhHZ/8vUGwDubH4AQ2gxQajxAAA/Edj/a9QbAMhsfgBfwjFBkPEAACkR2P8R1BwAo2x/AHscMkF58QAAERHY/73THACBbH8Al3YyQXfxBQD9ENj/btPq/2FsfwCz0DJBBfnNAVkSqP/J1RjsfWt/AM8qM0E19psBNxEn/xfYaOHXaX8A64QzQZn0SgN8EMr+nNoa3sFpfwAH3zNBn/TrAnMQXP4T3XraXWl/ACM5NEHJ9OMCpRCr/iHfu9ahaH8AP5M0QeL0sQLAEFr/+ODd0phnfwBb7TRB2fRwArkQBQDM4hzPamZ/AHdHNUHP9CUCsxCtAJvkZcsQZX8Ak6E1QcP02wGrEE0BZea+x41jfwCv+zVBs/STAaIQ5gEr6CzE4mFyAMtVNkGh9E8BmBB3AvDpsMAUYF8A5682QZH0EwGOEAYDuetLvSNeQAADCjdBg/TZAIQQjgOD7f25EVwzAB9kN0F09KEAexAPBEvvx7bdWSEAO743QWT0agByEIcED/Gss4lXGQBXGDhBVfQ0AGkQ9ATO8qqwFlUtAHNyOEFF9AAAYRBYBYr0xK2FUkoAj8w4QTX0zf9ZELQFRPb5qthPVgCrJjlBJfSb/1IQCwb990uoEE1mAMeAOUEV9Gr/ShBcBrb5uqUuSnAA49o5QQX0Ov9EEKoGcftHozRHdgD/NDpB9fML/z4Q9QYs/fSgIUR4ABuPOkHm893+OBA9B+f+wJ74QHsAN+k6Qdfzsf4yEIIHogCtnLk9fABTQztByfOG/i0QxAddArqaZjp7AG+dO0G781v+KRADCBcE6pj/NnIAi/c7Qa7zMv4lED0IzwU8l4YzYACnUTxBofMK/iIQcAiCB7CV/C9UAMOrPEGV8+L9HxCcCDEJSJRkLEsA3wU9QUf00v+oEMYHAwholBEtRQD7Xz1BEvSV/2AQEgfHByOV7C5CABe6PUEo9ML/TxArBg8HiJUMMEAAMxQ+QTT0p/87EDwFVgb7lT0xTABPbj5By9W+wo6ES8A8/ihDRASGBWGWRjJVAGvIPkEv9KP/LBA1A7cEBZfCM2YAhyI/QTD0f/8rEBwC2AOtlzA1cACjfD9BK/R6/yMQ9gD6AoeY6zZzAL/WP0E+9FL/LRC4/6kBq5kUOXgA2zBAQT709/48EET+4/9Dm9g7ewD3ikBBWfSFAFgQRf7iAMKa+zp9ABPlQEFS9O//UhDw/UIBuprpOn0ALz9BQVb07v9QEH79aAF4mnI6fgBLmUFBW/QIAE8QIP2oAYSagDp+AGfzQUFe9AAAThC//OABh5p/On8Ag01CQWL0+/9NEF38DgKPmoU6fwCfp0JBZ/QFAE0QBfxLAo6afDp/ALsBQ0Fq9P3/TBCr+34ChppmOn8A11tDQW70AgBLEFT7rwKXmnk6fwDztUNBcvQBAEoQAfvhApqadTp/AA8QREF19Pv/SRCq+ggDo5p6On8AK2pEQXr0BQBJEF/6PgOimnA6fwBHxERBffT9/0gQEPpqA5uaWjp/AGMeRUGB9P3/RxDL+Z4Dr5pxOn8Af3hFQYX0AwBFEH75vwOkmlQ6fwCb0kVBifQDAEUQOvnoA7SaZTp/ALcsRkGN9AAARBD3+A4EuZpjOn8A04ZGQZD0+/9DELL4KwTCmmg6fwDv4EZBlfQDAEMQevhYBMKaXzp/AAs7R0GZ9AAAQRA++HgExJpXOn8AJ5VHQZz0AABBEAb4mQTKmlg6fwBD70dBoPT9/0AQz/e2BMOaQjp/AF9JSEGj9P3/PxCh994E15paOn8Ae6NIQaj0AgA+EGz38ATMmj06fwCX/UhBq/T5/z4QQfcPBeWaYDp/ALNXSUGw9AsAPBAW9yQF35pOOn8Az7FJQbP0AAA8EO32OgXfmkY6fwDrC0pBt/QAADsQyvZSBeaaSjp/AAdmSkG59P7/OBCh9mAF65pLOn8AI8BKQb/0AwA5EIT2dwXsmkU6fwA/GktBwvT9/zgQZ/aGBeOaMDp/AFt0S0HF9P3/NxBT9qIF9JpHOn8Ad85LQcr0BgA2EDf2pAXzmkE6fwCTKExBy/T+/zMQG/auBfeaQjp/AK+CTEHQ9AIAMxAJ9r4F+Jo+On8Ay9xMQdP0/f8yEPb1xwXumio6fwDnNk1B1fT9/zEQ6vXeBf6aQTp/AAORTUHb9AIAMBDX9dkF8ZooOn8AH+tNQdv0AAAtEMb13gUDm0M6fwA7RU5B4fQDAC0QvfXqBf+aOjp/AFefTkHm9AAAJhCt9fMF/5o1On8Ac/lOQQX6dgFcDQLuCg6tpMxFfwCPU09BQvtdAcQMzubIFkew4k5/AKutT0Ei/cEBtAuz3M8f9LdET38AxwdQQckF0f8BANbauyDmt/tNfwDjYVBB7wNSAYwB19i6Hx+3sEx/AP+7UEEpBMwAHAH713Ee5raNTH8AGxZRQUQElwDpAODXSR3gtuxMfwA3cFFBTARpANgAEdg1HN22aU1/AFPKUUFLBFEA1ABj2DQbrbbDTX8AbyRSQUgENgDTAMDYNxpItulNfwCLflJBRQQcANIALNlDGaq12U1/AKfYUkFDBAMA0QCp2VkY1bSVTX8AwzJTQUEE6//RADjafBfRsyFNfwDfjFNBVQLYwn35QsCgVD1D3dqyFquyiEx/APvmU0E/BLf/0gCa2/8Va7HRS38AF0FUQUAElv/RAGncXhUbsAJLfwAzm1RBQgSG/9EAW93hFKeuBUp/AE/1VEFDBF//0QBa3m4UK63zSH8Aa09VQUUETf/RAHjfHRSNq65HfwCHqVVBRgQl/9EAouDVE+qpUEZ/AKMDVkFJBBH/0QDp4awTKKi6RH8Av11WQUwE7P7RAD/jkBNfpgBDfwDbt1ZBTgTJ/tEAp+SEE42kHkF/APcRV0FVBKr/wwAG5dcRDqIiPn8AE2xXQVoEff/BAHnlNhCfn/c6fwAvxldBYARZ/78A+eWWDjydkDd/AEsgWEHsA2oAFQEd58kOZp1SOH8AZ3pYQewDWQASAR/oug55nec4fwCD1FhB7QM1ABABEemKDoCdYjl/AJ8uWUHuAxYADgHu6S8Odp29OX8Au4hZQe8D9/8MAbXqqw1anfg5fwDX4llB8APY/wsBZuv9DC2dFDp/ANfiWUHWKdTCUNhOwIG9PUNm6/0MLZ0UOn8A'

const decodedString = atob(base64)
const decodedUint8Array = new Uint8Array(decodedString.length)
for (let index = 0; index < decodedString.length; index++) {
  decodedUint8Array[index] = decodedString.codePointAt(index) ?? 0
}

export const ghostV4 = decodedUint8Array.buffer
