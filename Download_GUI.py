import sys
from tkinter import *
import requests
from PIL import Image, ImageTk
import tkinter.filedialog
from tkinter import messagebox
import Music_wyy
import os



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


def GUI_Download(id, pic_url, name, singer, album,window):

    def GUI_pic(url):
        content = requests.get(url=url).content
        with open('1.jpg', 'wb') as fp:
            fp.write(content)

    def Find_file():
        filename = tkinter.filedialog.askdirectory()
        if filename != '':
            File_entry.delete(0, 'end')
            File_entry.insert(0, filename)
        else:
            messagebox.showwarning('警告', '        您没有选择任何文件        ')

    def Download_song():
        filename = File_entry.get()
        if os.path.exists(filename):
            if filename[-1] != '/':
                filename = filename + '/'
            Music_wyy.Download_Muic(name, id, filename)
            messagebox.showinfo('提示', '        下载完成        ')

        else:
            messagebox.showerror('错误', '         文件路径有误         ')

    def Download_lyric():
        filename = File_entry.get()
        if os.path.exists(filename):
            if filename[-1] != '/':
                filename = filename + '/'
            Music_wyy.Download_Lyric(name, id, filename)
            messagebox.showinfo('提示', '        下载完成        ')

        else:
            messagebox.showerror('错误', '         文件路径有误         ')

    def Download_pic():
        filename = File_entry.get()
        if os.path.exists(filename):
            if filename[-1] != '/':
                filename = filename + '/'
            Music_wyy.Download_pic(name, pic_url, filename)
            messagebox.showinfo('提示', '        下载完成        ')

        else:
            messagebox.showerror('错误', '         文件路径有误         ')


    def on_closing():
        window.deiconify()
        new_window.destroy()

    # 隐藏主窗口
    window.withdraw()

    # 创建新的窗口
    new_window = Toplevel()
    new_window.title('Music')
    new_window.iconbitmap("./Sr1BadgePickup.ico")

    # 设置窗口大小变量
    width = 500
    heigth = 360
    # 窗口居中，获取屏幕尺寸以计算布局参数，使窗口居屏幕中央
    screenwidth = new_window.winfo_screenwidth()
    screenheighht = new_window.winfo_screenheight()
    size_geo = "%dx%d+%d+%d" % (width, heigth, (screenwidth - width) / 2, (screenheighht - heigth) / 2)
    new_window.geometry(size_geo)
    new_window.resizable(0, 0)

    # ==========================================================
    # 左半部分的部件

    # 下载图片并放入图片
    GUI_pic(pic_url)
    img = Image.open('1.jpg').resize((150, 150))
    photo = ImageTk.PhotoImage(img)
    Picture = Label(new_window, image=photo, relief='solid')
    Picture.place(relx=0.235, rely=0.5, anchor='center')

    # 图片下方有关歌曲信息的文字
    name_ = '歌曲名: ' + name
    singer_ = '艺术家: ' + singer
    album_ = '专辑名: ' + album

    music_name = Label(new_window, text=name_, font=('宋体', 10), anchor=W)
    music_singer = Label(new_window, text=singer_, font=('宋体', 10), anchor=W)
    music_album = Label(new_window, text=album_, font=('宋体', 10), anchor=W)

    music_name.place(relx=0.08, rely=0.76, anchor=W)
    music_singer.place(relx=0.08, rely=0.81, anchor=W)
    music_album.place(relx=0.08, rely=0.86, anchor=W)

    # ===================================================================
    # 右半部分的部件，下载按钮
    Frame_download = LabelFrame(new_window, text="Download")
    Frame_download.place(relx=0.73, rely=0.58, anchor='center')

    Download_song_btn = Button(Frame_download, text='下载歌曲', bg='Gainsboro', underline=True,
                               command=Download_song)
    Download_lyric_btn = Button(Frame_download, text='下载歌词', bg='Gainsboro', underline=True,
                                command=Download_lyric)
    Download_pic_btn = Button(Frame_download, text='下载图片', bg='Gainsboro', underline=True, command=Download_pic)

    Download_song_btn.grid(row=0, padx=40, pady=15, ipadx=25, ipady=5)
    Download_lyric_btn.grid(row=1, padx=40, pady=15, ipadx=25, ipady=5)
    Download_pic_btn.grid(row=2, padx=40, pady=15, ipadx=25, ipady=5)

    # ===================================================================
    # 查询文件路径部件
    Frame_file = LabelFrame(new_window, text='Destination Folder', )
    Frame_file.place(relx=0.5, rely=0.13, anchor='center')

    File_entry = Entry(Frame_file)
    File_entry.grid(row=0, column=0, padx=5, pady=5, ipadx=90, ipady=1)

    File_btn = Button(Frame_file, text='Browse...', underline=1, command=Find_file, bg='Gainsboro')
    File_btn.grid(row=0, column=1, padx=5, pady=5, ipadx=5)

    # 关闭该窗口时，将，主窗口显示，并退出该窗口
    new_window.protocol('WM_DELETE_WINDOW',on_closing)

    new_window.mainloop()





if __name__ == '__main__':
    GUI_Download(327089, 'http://p2.music.126.net/9YeRLbaJmAc3FiHRxJXxzw==/109951165641456869.jpg', '画心', '张靓颖', '画心')
