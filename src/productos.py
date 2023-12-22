productos = {
    "producto1": {
        "id":1,
        "EAN": "123456789012",
        "sku": "ABC1",
        "market": "EU",
        "NORMAL_PRICE": 12
    },
    "producto2": {
        "id":2,
        "EAN": "987654321098",
        "sku": "XYZ1",
        "market": "EU",
        "NORMAL_PRICE": 9
    },
    "producto3": {
        "id":3,
        "EAN": "111111111111",
        "sku": "ABC2",
        "market": "US",
        "NORMAL_PRICE": 15
    },
    "producto4": {
        "id":4,
        "EAN": "123456789012",
        "sku": "ABC1",
        "market": "US",
        "NORMAL_PRICE": 10
    },
}

# ESTA FUNCION LO QUE HACE ES QUE LE PASAMOS COMO ARGUMENTO LA LISTA DE PRODUCTOS E 
# INICIALIZAMOS UN ARRAY DE PRODUCTOS_AGRUPADOS VACIO PARA AGRUPAR LOS PRODUCTOS SEGUN SU CODIGO EAN, LUEGO ITERAMOS EN CADA PRODUCTO Y SE EXTRAE EL EAN , SI NO ESTA EN PRODUCTOS_AGRUPADOS SE AGREGA COMO UN VALOR.
# FINALMENTE SE AGREGA LA INFORMACION DEL PRODUCTO ACTUAL A LA LISTA ASOCIADA AL EAN.
def productos_ean(productos):
    productos_agrupados = {}
    for nombre_producto, producto in productos.items():
        ean = producto['EAN']

        if ean not in productos_agrupados:
            productos_agrupados[ean] = []

        productos_agrupados[ean].append({
            "id": producto['id'],
            "sku": producto['sku'],
            "market":producto['market'],
            "precio": producto['NORMAL_PRICE'],
          
        }) 

    return productos_agrupados

resultado = productos_ean(productos)
print(resultado)
