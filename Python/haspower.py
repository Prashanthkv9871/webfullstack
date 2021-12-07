def hasPower():
    power = "No"
    if(power=="yes"):
        print("Seek other help")

    elif(power=="No"):
        print("is plugged in?")

        plug = "Yes"
        if(plug=="Yes"):
            print("Is the Switch on?")

            switch="Yes"
            if(switch=="Yes"):
                print("Fuse OK?")

                fuse="no"
                if(fuse=="ok"):
                    print("Seek other help")
                else:
                    print("Check fuse")

            else:
                print("Turn switch on")
        else:
            print("Plug it in")

hasPower()
