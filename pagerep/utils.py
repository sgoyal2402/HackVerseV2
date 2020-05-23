

def fifo(data):
    print('reached')
    cache_size = data["size"]
    requests = data["requests"]
    cache = [-1 for _ in range(cache_size)]



    output = {}
    output["states"] = [];

    victim = 0
    hit = 0
    n = len(requests)
    indx = -1

    for request in requests:
        try:
            indx = cache.index(request)
        except ValueError:
            indx = -1

        if( indx != -1):

            state = { "status": "H",
                      "cache": " ".join(str(e) for e in cache)  }

            hit = hit + 1;

        else:
            cache[victim] = request
            victim = (victim + 1) % cache_size

            state = { "status": "M",
                      "cache": " ".join(str(e) for e in cache)  }


        output["states"].append(state)
    output["hits"] = hit
    output["miss"] = n - hit
    output["hit-ratio"] = round(float(hit)/n,2);

    return output






def sc(data):

    cache_size = data["size"]
    requests = data["requests"]
    cache = [-1 for _ in range(cache_size)]
    referencebit = [0 for _ in range(cache_size)]



    output = {}
    output["states"] = [];

    victim = 0
    hit = 0
    n = len(requests)
    indx = -1

    for request in requests:
        try:
            indx = cache.index(request)
        except ValueError:
            indx = -1

        if( indx != -1):
            referencebit[indx] = 1

            state = { "status": "H",
                      "cache": " ".join(str(e) for e in cache)  }

            hit = hit + 1;

        else:
            flag=1
            while (flag == 1):
                if (referencebit[victim] == 0):
                    cache[victim] = request
                    victim = (victim + 1) % cache_size
                    flag=0
                else:
                    referencebit[victim] = 0
                    victim = (victim + 1) % cache_size
                    flag=1

            state = {"status": "M", "cache": " ".join(str(e) for e in cache)}
        output["states"].append(state)









    output["hits"] = hit
    output["miss"] = n - hit
    output["hit-ratio"] = round(float(hit)/n,2);

    return output






def lru(data):
    cache_size = data["size"]
    requests = data["requests"]
    cache = [-1 for _ in range(cache_size)]


    output = {}
    output["states"] = [];

    victim = 0
    hit = 0
    n = len(requests)
    indx = -1
    last_used = [ -1 for _ in range(cache_size)]
    time = 0
    fill = 0

    for request in requests:
        try:
            indx = cache.index(request)
        except ValueError:
            indx = -1

        if( indx != -1):
            hit = hit + 1;
            last_used[indx] = time
            state = { "status": "H",
                      "cache": " ".join(str(e) for e in cache) ,
                      "lru": " ".join(str(e) for e in last_used) }
            output["states"].append(state)


        else:
            if(-1 in cache):
                victim = cache.index(-1)
            else:
                victim = last_used.index(min(last_used))

            cache[victim] = request
            last_used[victim] = time

            state = { "status": "M",
                      "cache": " ".join(str(e) for e in cache) ,
                      "lru": " ".join(str(e) for e in last_used) }
            output["states"].append(state)

        time = time + 1

    output["hits"] = hit
    output["miss"] = n - hit
    output["hit-ratio"] = round(float(hit)/n,2);

    return output






def lfu(data):
    cache_size = data["size"]
    requests = data["requests"]
    cache = [-1 for _ in range(cache_size)]

    history=[-1 for _ in range(cache_size)]


    output = {}
    output["states"] = [];

    victim = 0
    hit = 0
    n = len(requests)
    print(n)
    frequency=[ -1 for _ in range(max(requests)+1
                                  )]
    print(len(frequency))
    indx = -1
    last_used = [-1 for _ in range(cache_size)]
    time = 0
    fill = 0
    v=[-1 for _ in range(cache_size)]

    for request in requests:
        frequency[request]=frequency[request]+1
        print(frequency)
        try:
            indx = cache.index(request)
        except ValueError:
            indx = -1

        if( indx != -1):
            hit = hit + 1;


            state = { "status": "H",
                      "cache": " ".join(str(e) for e in cache) ,
                      "lru": " ".join(str(e) for e in last_used) }
            output["states"].append(state)


        else:
            if(-1 in cache):
                victim = cache.index(-1)
            else:
                v1 = [9999 for _ in range(max(requests) + 1
                                        )]
                for ele in cache:
                    v1[ele]=frequency[ele]



                minfreq = v1.index(min(v1))
                flag=1
                i=0
                last=[-1 for _ in range(cache_size)]
                for el in last_used:
                    last[i]=el
                    i=i+1
                while(flag==1):
                    e=last.index(min(last))
                    if(frequency[cache[e]]==min(v1)):
                        minfreq=cache[e]
                        flag=0
                    else:
                        last[e]=9999





                frequency[minfreq]=-1
                victim=cache.index(minfreq)

            cache[victim] = request

            last_used[victim] = time
            print("time")
            print( time)

            state = { "status": "M",
                      "cache": " ".join(str(e) for e in cache) ,
                      "lfu": " ".join(str(e) for e in last_used) }
            output["states"].append(state)

        time = time + 1

    output["hits"] = hit
    output["miss"] = n - hit
    output["hit-ratio"] = round(float(hit)/n,2);

    return output









def opt(data):
    cache_size = data["size"]
    requests = data["requests"]
    cache = [-1 for _ in range(cache_size)]
    output = {}
    output["states"] = [];

    victim = 0
    hit = 0
    n = len(requests)
    indx = -1
    last_to_use = [ -1 for _ in range(cache_size)]
    time = 0

    for request in requests:
        flag=0
        try:
            indx = cache.index(request)
        except ValueError:
            indx = -1

        if( indx != -1):
            hit = hit + 1;
            state = { "status": "H",
                      "cache":" ".join(str(e) for e in cache),
                      "opt": " ".join(str(e) for e in last_to_use) }
            output["states"].append(state)


        else:
            if(-1 in cache):
                victim = cache.index(-1)
            else:

                for elem in cache:
                    try:
                        indx = requests[time+1:].index(elem) #index of first occurence occurence of elem among remaining requests
                    except ValueError:
                        indx = 1000000
                        flag = 1

                    last_to_use[cache.index(elem)] = indx
                    if(flag): break

                victim = last_to_use.index(max(last_to_use))


            cache[victim] = request


            state = { "status": "M",
                      "cache":" ".join(str(e) for e in cache),
                      "opt": " ".join(str(e) for e in last_to_use) }
            output["states"].append(state)
        time = time + 1

    output["hits"] = hit
    output["miss"] = n - hit
    output["hit-ratio"] = round(float(hit)/n,2);

    return output



if __name__ == '__main__':
    dat = {}
    dat["requests"] = [1,3,2,1,2,4,5,2]
    dat["size"] = 3
    # print fifo(dat)
    # print lru(dat)
    # print optimum(dat)
    # in js
    # cache  = output["cache"].split(" ").map(Number)
