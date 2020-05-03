/**
 * PRODUTS THAT SHOULD BE IN AMERICANAS DATABASE
 */
import motog from '../assets/images/products/motoG8/motoG8PNG.png';
import galaxys9 from '../assets/images/products/galaxys9/galaxys9PNG.png';
import fritadeira from '../assets/images/products/fritadeira/fritadeiraPhilco.jpg';
import notebook from '../assets/images/products/notebook/notebookPNG.png';
import tablet from '../assets/images/products/tablet/tabletPNG.png';

const products = [
    {
        code: '001',
        title:
            'Celular Motorola Moto G8 Plus Cereja 64GB Camêra Tripla 48MP + 5MP + 16MP',
        photo: motog,
        price: 2000,
        amount: 1,
        observations: [
            'Preço:2.000,00',
            'Parcelamento:10 x 200,00 s/ juros',
            'Marca:Motorola',
            'Cor:Cereja',
            'Memoria (RAM):6GB',
            'Peso do produto:150g gramas',
            'Dimençoes:14,5 x 6,9 x 0,7 cm',
        ],
    },
    {
        code: '002',
        title: 'Samsung Galaxy S9 128GB Camêra 12MP + 8MP resistente a agua',
        photo: galaxys9,
        price: 1899,
        amount: 1,
        observations: [
            'Preço:1.899,00',
            'Parcelamento:10 x 189,99 s/ juros',
            'Marca:Samsung',
            'Cor:Rosa',
            'Memoria (RAM):4GB',
            'Peso do produto:163 gramas',
            'Dimençoes:147.7 x 68.7 x 8.5 mm',
        ],
    },
    {
        code: '003',
        title: 'Fritadeira Philco Air Fry Saúde Inox PH 3,2L',
        photo: fritadeira,
        price: 369.9,
        amount: 1,
        observations: [
            'Preço:369,90',
            'Parcelamento:10 x 36,90 s/ juros',
            'Marca:Philco',
            'Cor:Preto',
            'Peso do produto:5,69Kg',
            'Capacidade:3,2 L',
            'Controle de temperatura:de 80 a 200°C',
            'Potencia(W):1400',
        ],
    },
    {
        code: '004',
        title: 'Notebook Samsung E30 I3 7020U da 7ºGeração',
        photo: notebook,
        price: 2299,
        amount: 1,
        observations: [
            'Preço:2.299,00',
            'Parcelamento:10 x 229,00 s/ juros',
            'Marca:Samsung',
            'Cor:Cinza',
            'Sistema Operacional:Windows 10 Home',
            'Armazenamento:HD DE 1TB 5400RPM',
            'Memoria (RAM):4GB até 16GB',
            'Peso do produto:1.9 kg',
            'Tamanho: 1,9 x 37,7x 24,9 cm',
        ],
    },
    {
        code: '005',
        title:
            'Tablet Samsung Galaxy Tab Octa-Core 1.8GHz Wi-Fi + 4G Tela 10,1" Android Pie',
        photo: tablet,
        price: 2000,
        amount: 1,
        observations: [
            'Preço:1.424,00',
            'Câmera Traseira:8MP',
            'Parcelamento:10 x 142,24 s/ juros',
            'Marca:Samsung',
            'Cor:Prata',
            'Armazenamento:32GB',
            'Memoria (RAM):2GB',
            'Peso do produto:480 gramas',
        ],
    },
];

const getProduct = search => {
    return products.find(product => product.code === String(search));
};

export default getProduct;
