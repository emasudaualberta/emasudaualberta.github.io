import os
#i dont want to use file io in javascript so here i use this to create the page

def main():
    filename = input("filename...")
    title = input("title")
    script = input("bio")
    path = "./"+filename
    os.mkdir(path)
    f = open(path + title+".html","x")
    f.close()
    f = open (path + title+".html","w")
    image1 = '''<img src="'''+path + input("image1")+'''+ alt="image1" style="width:100%">'''
    image2 = '''<img src="'''+path + input("image2")+'''+ alt="image2" style="width:100%">'''
    image3 = '''<img src="'''+path + input("image3")+'''+ alt="image3" style="width:100%">'''
    template = open("template.html","r")
    content  = template.read()
    f.write(content+"""<div class="row">
            <div class="column">"""+image1+image2+image3+"""<div id = "maintext"><p2 style = "position: relative;">&emsp;"""+script+" </p2></div>")
    





    return

if __name__ == '__main__':
    main()

