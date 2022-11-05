import bluetooth

def get_nearby():
    nearby_devices = bluetooth.discover_devices(lookup_names = True) # find all nearby devices
    print("found {} devices.".format(len(nearby_devices)))

    for addr, name in nearby_devices:
        print(" {} - {}".format(addr, name)) # display device names
