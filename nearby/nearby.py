import bluetooth

import sockets

def get_nearby():
    nearby_devices = bluetooth.discover_devices(lookup_names = True) # find all nearby devices
    #print("found {} devices.".format(len(nearby_devices)))

    for addr, name in nearby_devices:
        print("name=", name) # display device names
        print("addr=", addr) # display address names
    
    return nearby_devices

def get_port():
    s = sockets.socket(sockets.AF_INET, sockets.SOCK_STREAM)
    s.bind(("",0))
    s.listen(1)
    port = s.getsockname()[1]
    s.close()

    return port