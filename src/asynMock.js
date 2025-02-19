const products = [
  {
    "id": 1,
    "title": "Monitor Hikvision DS5027FN Full HD 27",
    "price": 201.095,
    "description": "24 Pulgadas, Modelo 24MS500 Ips 100hz IPS Full HD Borderless",
    "category": "monitores",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/163_800.jpg",
  },
  {
    "id": 2,
    "title": "MONITOR LED 24 MSI G2412F ",
    "price": 306.534,
    "description": "24 Pulgadas Modelo G2412F Ips / 180hz / HDMI",
    "category": "monitores",
    "image": "https://alphatechdz.com/wp-content/uploads/2021/08/msi-02.png",
  },
  {
    "id": 3,
    "title": "MONITOR GAMER 27 Gigabyte GS27FA-SA 180HZ",
    "price": 420.669,
    "description": "27 Pulgadas / 180Hz IPS 1ms",
    "category": "monitores",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/7798170583982_400.jpg",
  },
  {
    "id": 4,
    "title": "Monitor Led 22 GFAST T-220 HDMI FHD",
    "price": 139.152,
    "description": "GFAST / Pulgadas: 22/ HDMI - VGA",
    "category": "monitores",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/8712581787400_400.jpg"
  },
  {
    "id": 5,
    "title": "MONITOR LED 24 CX 236D Full HD HDMI",
    "price": 254.656,
    "description": "24 Pulgadas/1920x1080/Full HD/CX 236D/HDMI + VGA",
    "category": "monitores",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/8806090677533_400.jpg",
  },
  // Categoría Computadoras
  {
    "id": 6,
    "title": "Computadora HP Pavilion Gaming",
    "price": 799.99,
    "description": "Procesador Intel Core i7, 16GB RAM, 512GB SSD, NVIDIA GTX 1660 Ti",
    "category": "computadoras",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/196378493268_400.jpg",
  },
  {
    "id": 7,
    "title": "Computadora Dell G5 15",
    "price": 1099.99,
    "description": "Intel Core i7, 16GB RAM, 512GB SSD, NVIDIA RTX 3060",
    "category": "computadoras",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/196118156811_400.jpg",
  },
  {
    "id": 8,
    "title": "Computadora ASUS TUF Gaming",
    "price": 1299.00,
    "description": "AMD Ryzen 7 5800X, 16GB RAM, 1TB SSD, NVIDIA RTX 3070",
    "category": "computadoras",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/646_400.jpg",
  },
  {
    "id": 9,
    "title": "Computadora MSI Infinite X",
    "price": 1499.00,
    "description": "Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 3080",
    "category": "computadoras",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/196379312544_400.jpg",
  },
  {
    "id": 10,
    "title": "Computadora Lenovo Legion Tower 5",
    "price": 1199.99,
    "description": "AMD Ryzen 5, 16GB RAM, 512GB SSD, NVIDIA GTX 1660 Super",
    "category": "computadoras",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/196803733068_400.jpg",
  },
  // Categoría Periféricos
  {
    "id": 11,
    "title": "Teclado Mecánico Logitech G Pro X",
    "price": 129.99,
    "description": "Teclado mecánico personalizable con interruptores intercambiables",
    "category": "perifericos",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/4710268259015_400.jpg",
  },
  {
    "id": 12,
    "title": "Mouse MX518 Legendary DDV",
    "price": 69.99,
    "description": "Sensor óptico de 16,000 DPI, 7 botones programables",
    "category": "perifericos",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/097855145109_400.jpg",
  },
  {
    "id": 13,
    "title": "Auriculares Corsair HS70 Pro",
    "price": 99.99,
    "description": "Auriculares inalámbricos con sonido envolvente 7.1 y micrófono de calidad",
    "category": "perifericos",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/6955112501959_400.jpg",
  },
  {
    "id": 14,
    "title": "Mouse Logitech G Pro Wireless",
    "price": 149.99,
    "description": "Mouse inalámbrico para gamers con sensor HERO de 25K DPI, liviano y personalizable",
    "category": "perifericos",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/097855155986_400.jpg"
  },
  {
    "id": 15,
    "title": "Camara Web Logitech Brio 505",
    "price": 79.99,
    "description": "Webcam HD 1080p con autofoco, ideal para streaming",
    "category": "perifericos",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/097855181688_400.jpg",
  },
  // Categoría Sillas Gamer
  {
    "id": 16,
    "title": "Silla Gamer DXRacer Formula Series",
    "price": 349.00,
    "description": "Silla ergonómica con soporte lumbar y reposabrazos ajustables",
    "category": "sillas",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/7798396860065_400.jpg",
  },
  {
    "id": 17,
    "title": "Silla Gamer Secretlab Titan Evo",
    "price": 449.00,
    "description": "Silla ergonómica de alta calidad, ideal para largas sesiones de juego",
    "category": "sillas",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/4710562756470_400.jpg",
  },
  {
    "id": 18,
    "title": "Silla Gamer AKRacing Masters Series",
    "price": 379.00,
    "description": "Silla ergonómica con cojín lumbar, diseño premium",
    "category": "sillas",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/7798396860072_400.jpg",
  },
  {
    "id": 19,
    "title": "Silla Gamer Noblechairs Hero",
    "price": 499.00,
    "description": "Silla ergonómica con un diseño de lujo y soporte lumbar ajustable",
    "category": "sillas",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/843591064941_400.jpg",
  },
  {
    "id": 20,
    "title": "Silla Gamer Respawn 110",
    "price": 229.00,
    "description": "Silla reclinable con reposapiés, excelente para videojuegos",
    "category": "sillas",
    "image": "https://www.eclypse.com.ar/Temp/App_WebSite/App_PictureFiles/Items/4719512077603_400.jpg",
  }
]

export default products;



export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products)
    }, 100);
  })

}

export const getCategorById = (categoryId) => {
  return new Promise((res) => {
     setTimeout(() =>{
      res(products.filter(prod => prod.category == categoryId))
    }, 100)
  })
}


export const getProductsById = (productoId) => {
  return new Promise((res) => {
     setTimeout(() =>{
      res(products.find(prod => prod.id == productoId))
    }, 100)
  })
}