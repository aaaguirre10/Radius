from hashlib import sha256
import rsa
import os

def make_key():
    # generate keys with newkeys method 
    public_key = rsa.newkeys(512)

    # encrypt key
    encryptMessage = rsa.encrypt(message.encode(), public_key)
    sha256(encryptMessage)

    # decrypt key
    # decodeMessage = rsa.decrypt(encryptMessage, private_key).decode()

    return encryptMessage

make_key()