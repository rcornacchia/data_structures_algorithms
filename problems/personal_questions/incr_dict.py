dct = {}
def incr_dict(dct, args):
    # print dct
    x = {}
    for index in range(len(args)):
        node = args[index]
        if index == len(args)-1:
            if(len(x.keys())):
                x[node] += 1
            else:
                x[node] = 1
        else:
            if (len(dct.keys())):
                x[node] = {}
                x = x[node]
            else:
                if (len(dct.keys())):
                    x = dct[node];
                    print x
                else:
                    dct[node] = {}
                    x = dct[node]
                print dct
        # print dct

    # a = nodes[0]
    # dct[a] = {}
    # b = nodes[1]
    # dct[a][b] = {}
    # x = dct[a][b]
    # c = nodes[2]
    #
    # x[c] = 1
    # print dct




incr_dict(dct, ('a', 'b', 'c'))
incr_dict(dct, ('a', 'b', 'c'))

































# Consider a function incr_dict, which takes two arguments, which behaves like this in Python:
# >>> dct = {}
# >>> incr_dict(dct, ('a', 'b', 'c'))
# >>> dct
# {'a': {'b': {'c': 1}}}
# >>> incr_dict(dct, ('a', 'b', 'c'))
# >>> dct
# {'a': {'b': {'c': 2}}}
# >>> incr_dict(dct, ('a', 'b', 'f'))
# >>> dct
# {'a': {'b': {'c': 2, 'f': 1}}}
# >>> incr_dict(dct, ('a', 'r', 'f'))
# >>> dct
# {'a': {'r': {'f': 1}, 'b': {'c': 2, 'f': 1}}}
# >>> incr_dict(dct, ('a', 'z'))
# >>> dct
# {'a': {'r': {'f': 1}, 'b': {'c': 2,'f': 1}, 'z': 1}}
# >>>
# incr_dict(dct, ('a', 'b', 'c')) is conceptually like:
# dct['a']['b']['c'] += 1
# except that it creates any necessary intermediate and leaf nodes.
# Implement incr_dict in Python or any language that supports dictionaries.
# Write executable tests for your function.
# Will your implementation continue to work well if the tuple is extremely long?
