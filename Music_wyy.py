import requests
import execjs
from lxml import etree




def Download_Muic(name, id, filename):
    url_single = 'https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=82e65df2a47e63e46a3fa40d224b20b6'

    # 打开js文件运行里面的函数
    js = open('node_wyy.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(js)
    # 调用js里面的函数（第一个是函数名，参数）
    result = ctx.call('Single', id)
    # print(result['encText'])
    # print(result['encSecKey'])

    data = {
        'params': result['encText'],
        'encSecKey': result['encSecKey']
    }

    headers = {
        'Cookie': 'NMTID=00OQxuLT0NbFQdAcUYivCrvBt83WfkAAAGIR-MXnw; _ntes_nnid=fdabe235a6f710ccdc9465fc8a84bccf,1684833253391; _ntes_nuid=fdabe235a6f710ccdc9465fc8a84bccf; WEVNSM=1.0.0; WNMCID=vzqxft.1684833258153.01.0; sDeviceId=YD-RfIs6KsWiHZBFwBFBQKQPTxwzioA3+O6; WM_TID=tJvUbHKmnztBBUURBBfRwCAv6V9iI9sr; ntes_utid=tid._.FOjN6OYjGUVERgBAEVKElHQ%252B7VtmHe3R._.0; __snaker__id=IRPvOTEWuy1t5kxB; YD00000558929251%3AWM_TID=UwcgRqZXOYpAVVQFVFOAlavzXviElTOi; _iuqxldmzr_=32; ntes_kaola_ad=1; YD00000558929251%3AWM_NI=Ujk1ctysR1N1i5DyisGmRjU0iHCsaj%2BFiiwnFxZCy%2Bk%2FrdsKFuClOcM0dv%2F8YtnLJJKIWKE0%2BiRsp%2B7%2FRBbG5rScuLxxhTAYJFdv3IbNvACXjPmySVP2k5tDqTomjbfOa0c%3D; YD00000558929251%3AWM_NIKE=9ca17ae2e6ffcda170e2e6ee8dc734edaeaad1b552f8ac8aa3c15e928b8a82d563b1b0bbb5b234b7939cd1e62af0fea7c3b92a97b6a5d2e280bbad9ed2cd3babeb8c9aec7985b39e8bd83cab988d94e462e99aa78af66686a896a4fc21a9f1be85f24186ab8d8dce698ff0ac97ae349baca2adc942899799acc83ce9b79e94f321f5f19ea3e14df7ae9d84f848bca8a8b5c4538a9aac97b243a292baa2c254aa90a39ad25e94eea5d6f750b38ca18ee96aa691afd1e237e2a3; _ntes_origin_from=; __csrf=5ac8cae8a42130cb0eb466e3668fb550; JSESSIONID-WYYY=wv%2FEJI2wpN0FA9yiGUf8rEyl%2BwO1n%2F%2F93vhCVDqPAu7b3harV9t12Fi3vuxqU2RKykp3i2ywB%5CfQPdXqf%5CRleTtwv0FcBii4vRAEHmdp%5CiiZYHhU5vRTdhNcm1mGHR6HjKRInXGhug7rmtfmZqPiQYfj8c5sW2nktxO%2FBy%2FQRH23GEen%3A1705475786676; WM_NI=%2BvSnrj9SFdlomyneaAPhjGlKV0tXoLAX6fK5hSYLOxsU0eoSm9bZJiwFO%2FGWyTD0%2BcXkt8T5rjsz96AqcbtqpXKgLwLFkg7kbUKvM4c4%2F%2F49hmPa2SAipd%2FhFSeMZzlrbWM%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee96f460f7a89ed6b17083b48ab3d14e838a9bb0d580bc97f8a5dc7ef89e9ba8ed2af0fea7c3b92ae9aa9d8ff162fb8d8a85ef65afa7a286e44b94b8a6a8ef4196f0bcb9ee488388fa87ca3fac8d97adce74b18b0086ee59afe7aebbc963b59a81d0c65dbb8c8cd1aa699cb5bcd9d73fb2b6bd9bbc3e83afad83f77bb4888588cf7d909aa588b661a28b8597d040a1ece1d0b733acb3a082b15983b7c085ae64868dabaed972b0aeaeb8d037e2a3; gdxidpyhxdE=xd9P8nlravUClbZtNUiHkBwZ1MQOMKz3TYNW3G%2BwKN9rTzg0CZcvHa6Jb4DlxaY2zP77uGw5ekVh557TQewr6n5wM7Wu4A74KSVkQSYxmR3CKL1SMG9I2KC4aCbf98Bsq%2BRpoPNiCnqNDVJ4o%2BIwXr0%2F8qWK6MKDVg2K4coHv5Izr2Vx%3A1705474890807; MUSIC_U=0051679B326CAF9A603F43823CBC744FA180EBB4D5340FA2207212EA79C9646E1B6253D5F80EDD6173279217B7B93FBFBC734BFB74480C935ACC3B61635FBDF3EBEBC3F1DAFBEC67ECA27B7939B8C17A00744A1EB2144AEC41E6456C149A5CBCE535E6E87FDE49E99D9D1517772F9F475AFE3BE222F558208271C11872DCF4742382FF6671CE6724D313CB6FF136AAFB8847F7E96CB83FB33498845817D6834E4DF9903FF67C52E42E31FF957752AEC4F9BBCC609A78D690036C6D95BC13DE96A416709D7D7DDEED5F4FC19D344425EB6ADDCB4524815199D2F2C8C70A8ADD40938952F1F74786A29A87DCE57C16401F67B666A93096E464B3638DF97795DA02830881E0AB9DB8C77F81FECD5CE378DFEE635D4C193FEA5075E3C4125D29235CDD5ED7423D5CEA3EE95D3C4320B4DC7E6FE872FC3A8B4107AF22D52870EDE5C1309CFF11A0C3D6308AE4B3D578FA2636BDCC17837778B925BFBD409B5152972623; __csrf=03c2b9d7de9ac627bf49f894bb7d6e92'
    }

    content = requests.post(url=url_single, data=data, headers=headers).json()

    # 找到下载歌曲的url
    song_url = content['data'][0]['url']

    # 爬取下载音乐的数据
    mp3_data = requests.get(url=song_url, headers=headers).content

    # 下载音乐到本地
    with open(filename + name + '.mp3', 'wb') as fp:
        fp.write(mp3_data)
        print("下载成功")

def change_time(time):
    if len(str(time // 60)) == 1:
        minutes = '0' + str(time // 60)
    else:
        minutes = str(time // 60)

    if len(str(time % 60)) == 1:
        second = '0' + str(time % 60)
    else:
        second = str(time % 60)

    return minutes + ':' + second

def Find_Music(info):
    url_list = 'https://music.163.com/weapi/cloudsearch/get/web?csrf_token='

    js = open('node_wyy.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(js)
    # 调用js里面的函数（第一个是函数名，参数）
    result = ctx.call('All', info)

    data = {
        'params': result['encText'],
        'encSecKey': result['encSecKey']
    }

    headers = {
        'Cookie': 'NMTID=00OQxuLT0NbFQdAcUYivCrvBt83WfkAAAGIR-MXnw; _ntes_nnid=fdabe235a6f710ccdc9465fc8a84bccf,1684833253391; _ntes_nuid=fdabe235a6f710ccdc9465fc8a84bccf; WEVNSM=1.0.0; WNMCID=vzqxft.1684833258153.01.0; sDeviceId=YD-RfIs6KsWiHZBFwBFBQKQPTxwzioA3+O6; WM_TID=tJvUbHKmnztBBUURBBfRwCAv6V9iI9sr; ntes_utid=tid._.FOjN6OYjGUVERgBAEVKElHQ%252B7VtmHe3R._.0; __snaker__id=IRPvOTEWuy1t5kxB; YD00000558929251%3AWM_TID=UwcgRqZXOYpAVVQFVFOAlavzXviElTOi; _iuqxldmzr_=32; ntes_kaola_ad=1; YD00000558929251%3AWM_NI=Ujk1ctysR1N1i5DyisGmRjU0iHCsaj%2BFiiwnFxZCy%2Bk%2FrdsKFuClOcM0dv%2F8YtnLJJKIWKE0%2BiRsp%2B7%2FRBbG5rScuLxxhTAYJFdv3IbNvACXjPmySVP2k5tDqTomjbfOa0c%3D; YD00000558929251%3AWM_NIKE=9ca17ae2e6ffcda170e2e6ee8dc734edaeaad1b552f8ac8aa3c15e928b8a82d563b1b0bbb5b234b7939cd1e62af0fea7c3b92a97b6a5d2e280bbad9ed2cd3babeb8c9aec7985b39e8bd83cab988d94e462e99aa78af66686a896a4fc21a9f1be85f24186ab8d8dce698ff0ac97ae349baca2adc942899799acc83ce9b79e94f321f5f19ea3e14df7ae9d84f848bca8a8b5c4538a9aac97b243a292baa2c254aa90a39ad25e94eea5d6f750b38ca18ee96aa691afd1e237e2a3; _ntes_origin_from=; __csrf=5ac8cae8a42130cb0eb466e3668fb550; JSESSIONID-WYYY=wv%2FEJI2wpN0FA9yiGUf8rEyl%2BwO1n%2F%2F93vhCVDqPAu7b3harV9t12Fi3vuxqU2RKykp3i2ywB%5CfQPdXqf%5CRleTtwv0FcBii4vRAEHmdp%5CiiZYHhU5vRTdhNcm1mGHR6HjKRInXGhug7rmtfmZqPiQYfj8c5sW2nktxO%2FBy%2FQRH23GEen%3A1705475786676; WM_NI=%2BvSnrj9SFdlomyneaAPhjGlKV0tXoLAX6fK5hSYLOxsU0eoSm9bZJiwFO%2FGWyTD0%2BcXkt8T5rjsz96AqcbtqpXKgLwLFkg7kbUKvM4c4%2F%2F49hmPa2SAipd%2FhFSeMZzlrbWM%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee96f460f7a89ed6b17083b48ab3d14e838a9bb0d580bc97f8a5dc7ef89e9ba8ed2af0fea7c3b92ae9aa9d8ff162fb8d8a85ef65afa7a286e44b94b8a6a8ef4196f0bcb9ee488388fa87ca3fac8d97adce74b18b0086ee59afe7aebbc963b59a81d0c65dbb8c8cd1aa699cb5bcd9d73fb2b6bd9bbc3e83afad83f77bb4888588cf7d909aa588b661a28b8597d040a1ece1d0b733acb3a082b15983b7c085ae64868dabaed972b0aeaeb8d037e2a3; gdxidpyhxdE=xd9P8nlravUClbZtNUiHkBwZ1MQOMKz3TYNW3G%2BwKN9rTzg0CZcvHa6Jb4DlxaY2zP77uGw5ekVh557TQewr6n5wM7Wu4A74KSVkQSYxmR3CKL1SMG9I2KC4aCbf98Bsq%2BRpoPNiCnqNDVJ4o%2BIwXr0%2F8qWK6MKDVg2K4coHv5Izr2Vx%3A1705474890807; MUSIC_U=0051679B326CAF9A603F43823CBC744FA180EBB4D5340FA2207212EA79C9646E1B6253D5F80EDD6173279217B7B93FBFBC734BFB74480C935ACC3B61635FBDF3EBEBC3F1DAFBEC67ECA27B7939B8C17A00744A1EB2144AEC41E6456C149A5CBCE535E6E87FDE49E99D9D1517772F9F475AFE3BE222F558208271C11872DCF4742382FF6671CE6724D313CB6FF136AAFB8847F7E96CB83FB33498845817D6834E4DF9903FF67C52E42E31FF957752AEC4F9BBCC609A78D690036C6D95BC13DE96A416709D7D7DDEED5F4FC19D344425EB6ADDCB4524815199D2F2C8C70A8ADD40938952F1F74786A29A87DCE57C16401F67B666A93096E464B3638DF97795DA02830881E0AB9DB8C77F81FECD5CE378DFEE635D4C193FEA5075E3C4125D29235CDD5ED7423D5CEA3EE95D3C4320B4DC7E6FE872FC3A8B4107AF22D52870EDE5C1309CFF11A0C3D6308AE4B3D578FA2636BDCC17837778B925BFBD409B5152972623; __csrf=03c2b9d7de9ac627bf49f894bb7d6e92'
    }

    content = requests.post(url=url_list, data=data, headers=headers).json()



    List = []
    for li in content['result']['songs']:
        # 歌曲名字
        song_name = li['name']
        # 歌曲id
        song_id = li['id']
        # 图片url
        pic_url = li['al']['picUrl']
        # 歌曲时间,并进行转换成分钟
        song_time = change_time(int(li['dt'] / 1000))
        # 专辑名字
        album_name = li['al']['name']
        # 歌手名字
        singer_name = li['ar'][0]['name']
        # 有多个歌手的情况下进行合并
        if len(li['ar']) != 1:
            i = 1
            while (i < len(li['ar'])):
                singer_name = singer_name + '/' + li['ar'][i]['name']
                i += 1
        single_dict = {'id': song_id, 'pic': pic_url, 'name': song_name, 'singer': singer_name, 'album': album_name,
                       'time': song_time}
        List.append(single_dict)

    return List

def Download_Lyric(name, id, filename):
    url = 'https://music.163.com/weapi/song/lyric?csrf_token=3f4db6940cf8b2e74549b5878fb8d3dc'

    js = open('node_wyy.js', 'r', encoding='utf-8').read()
    ctx = execjs.compile(js)
    # 调用js里面的函数（第一个是函数名，参数）
    result = ctx.call('lyric', id)

    data = {
        'params': result['encText'],
        'encSecKey': result['encSecKey']
    }

    content = requests.post(url=url, data=data).json()

    lyric = content['lrc']['lyric']

    with open(filename + name + '.txt', 'w') as fp:
        fp.write(lyric)

def Download_pic(name, pic_url, filename):
    content = requests.get(url=pic_url).content
    with open(filename + name + '.jpg', 'wb') as fp:
        fp.write(content)





if __name__ == '__main__':
    # Download_Muic('布拉格广场', '210049')
    Find_Music('雨天')
    # Download_Lyric('美人鱼', '108931')






