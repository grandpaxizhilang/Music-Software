import sys
from tkinter import *
from tkinter import ttk, messagebox
import Music_wyy
from Download_GUI import *


def source_path(relative_path):
    # 是否Bundle Resource
    if getattr(sys, 'frozen', False):
        base_path = sys._MEIPASS
    else:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

# 修改当前工作目录，使得资源文件可以被正确访问
cd = source_path('')
os.chdir(cd)



Search_List = []

def DoubleClick(event):
    e = event.widget                                    # 取得事件控件
    iid = e.identify('item',event.x,event.y)            # 取得双击项目id
    song_num = int(e.item(iid,'values')[0])             # 获取歌曲的序号

    song_id = Search_List[song_num-1]['id']
    pic_url = Search_List[song_num-1]['pic']
    song_name = Search_List[song_num-1]['name']
    song_singer = Search_List[song_num-1]['singer']
    song_album = Search_List[song_num-1]['album']
    # print(song_id,pic_url,song_name,song_singer,song_album)

    GUI_Download(song_id,pic_url,song_name,song_singer,song_album,window)

def get_search():
    global Search_List
    # 查询前清空列表里的东西
    Search_List.clear()
    # 删除Treeview中列表的全部数据
    for child in music_list.get_children():
        music_list.delete(child)

    if iv_choose.get() == 1:
        value = input_song.get()
        Search_List = Music_wyy.Find_Music(value)

        for i in range(len(Search_List)):
            if i % 2 == 0:
                music_list.insert("", index=END, values=(
                i + 1, Search_List[i]['name'], Search_List[i]['singer'], Search_List[i]['album'],
                Search_List[i]['time']))
            else:
                music_list.insert("", index=END, values=(
                i + 1, Search_List[i]['name'], Search_List[i]['singer'], Search_List[i]['album'],
                Search_List[i]['time']), tags='tag_on')
                music_list.tag_configure('tag_on', background='#f7f7f7')
    elif iv_choose.get() == 2:
        messagebox.showerror("错误","        还未有此接口        ")
    elif iv_choose.get() == 3:
        messagebox.showerror("错误","        还未有此接口        ")
    elif iv_choose.get() == 4:
        messagebox.showerror("错误","        还未有此接口        ")




window = Tk()
window.title('Music')
window.iconbitmap("./Sr1BadgePickup.ico")


# 设置窗口大小变量
width = 700
heigth = 500
# 窗口居中，获取屏幕尺寸以计算布局参数，使窗口居屏幕中央
screenwidth = window.winfo_screenwidth()
screenheighht = window.winfo_screenheight()
size_geo = "%dx%d+%d+%d" % (width, heigth, (screenwidth-width)/2, (screenheighht-heigth)/2)
window.geometry(size_geo)
window.resizable(0,0)

# ========================================================================

fr1 = Frame(window, borderwidth=1)
fr1.place(relx=0.5,rely=0.05,anchor='center')

iv_choose = IntVar()
choose_wyy = Radiobutton(fr1,text='网易云',value=1,variable=iv_choose)
choose_kuwo = Radiobutton(fr1,text='酷我',value=2,variable=iv_choose)
choose_kugou = Radiobutton(fr1,text='酷狗',value=3,variable=iv_choose)
choose_QQ = Radiobutton(fr1,text='QQ音乐',value=4,variable=iv_choose)

choose_wyy.grid(row=0,column=0,padx=15)
choose_kuwo.grid(row=0,column=1,padx=15)
choose_kugou.grid(row=0,column=2,padx=15)
choose_QQ.grid(row=0,column=3,padx=15)
# 默认先选择网易云接口
iv_choose.set(1)


# ==============================================================
class newEntry(Entry):
    def __init__(self, master=None, placeholder="PLACEHOLDER", color="grey"):
        super().__init__(master)

        self.placeholder = placeholder
        self.placeholder_color = color
        self.default_fg_color = self["fg"]

        self.bind("<FocusIn>", self.foc_in)
        self.bind("<FocusOut>", self.foc_out)

        self.put_placeholder()

    def put_placeholder(self):
        self.insert(0, self.placeholder)
        self["fg"] = self.placeholder_color

    def foc_in(self, *args):
        if self["fg"] == self.placeholder_color:
            self.delete("0", "end")
            self["fg"] = self.default_fg_color

    def foc_out(self, *args):
        if not self.get():
            self.put_placeholder()

fr2 = Frame(window,borderwidth=1)
fr2.place(relx=0.5,rely=0.12,anchor='center')

input_song = newEntry(fr2,'Searching for something...')
find_btn = Button(fr2,text='搜索',command=get_search)

input_song.grid(row=0,column=0,ipadx=50,ipady=3)
find_btn.grid(row=0,column=1,padx=10,ipadx=5)

# ===============================================================================

fr3 = Frame(window,borderwidth=1)
fr3.place(relx=0.5,rely=0.55,anchor='center')

# 建立Treeview
music_list = ttk.Treeview(fr3,columns=('#','歌曲名','艺术家','专辑名','时长'),height=18,show='headings')
# 建立栏标题
music_list.heading("#0",text="head",anchor=W)# 图标栏
music_list.heading("#1",text="#")
music_list.heading("#2",text="歌曲名",anchor=W)
music_list.heading("#3",text="歌手",anchor=W)
music_list.heading("#4",text="专辑名",anchor=W)
music_list.heading("#5",text="时长",anchor=W)
# 格式化栏位
music_list.column('#1',anchor=CENTER,width=40)
music_list.column('#2',anchor=W,width=200)
music_list.column('#3',anchor=W,width=150)
music_list.column('#4',anchor=W,width=150)
music_list.column('#5',anchor=W,width=80)

music_list.grid(row=0)
music_list.bind("<Double-1>",DoubleClick)

window.mainloop()