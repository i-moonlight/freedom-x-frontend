from hashlib import sha256

def hash(password):
    return sha256(password.encode("UTF-8")).hexdigest()


# e4629009-0c5b-4b55-a76b-aad90fbb85c2

print(hash('atifasim123'))