
const sands = [
    {
        title: 'Choripan',
        price: 'R$16,90',
        tag: '(linguicinha mista grelhada na parrila, pão francês, salsa criolla e chimichurri)'

    },
    {
        title: 'Pulled Pork',
        price: 'R$17,90',
        tag: '(Copa lombo defumada por 8hs, coleslaw, picles e pão crocante grelhado com aioli)'

    },
    {
        title: 'Cheese Burguer',
        price: 'R$17,90',
        tag: '(Carne 150g grelhada na parrilla, queijo, pão crocante grelhado com aioli)'

    },
    {
        title: 'Zeze Burguer',
        price: 'R$22,90',
        tag: '(Carne 150g grelhada na parrilla, queijo, bacon, salada e pão crocante grelhado com aioli)'

    },
    {
        title: 'Double cheese',
        price: 'R$24,90',
        tag: '(Carne 150g grelhada na parrilla, queijo prato, queijo crocante e pão brioche grelhado com aioli)'

    },
    {
        title: 'Chouriço Burguer',
        price: 'R$24,90',
        tag: '(Carne 150g grelhada na parrilla, queijo, chouriço grelhado, bacon, salada e pão brioche grelhado com aioli)'

    },
    {
        title: 'Jumbo Costela 12hs',
        price: 'R$29,90',
        tag: '(Carne 150g grelhada na parrilla, queijo, costela defumada 12hs, bacon, salada e pão crocante grelhado com aioli)'

    }
    

]

const toShare = [
    {
        title: 'Pão de Alho (2un)',
        price: 'R$11,90',
        tag: ''

    },
    {
        title: 'Fritas Crocante (500g)',
        price: 'R$23,90',
        tag: ''

    },
    {
        title: 'Batata Rústica (800g)',
        price: 'R$23,90',
        tag: ''

    },
    {
        title: 'Buffalo Wings',
        price: 'R$26,90',
        tag: '(Miolo da asa de frango temperado com RUB, bem crocante e barbecue envolto, acompanha aioli)'

    },
    {
        title: 'Morrones Rellenos',
        price: 'R$26,90',
        tag: '(Pimentões recheados com ovos, queijos e outros temperinhos)'

    },
    {
        title: 'ProvoZeta',
        price: 'R$39,90',
        tag: '(Queijo provolone grelhado na parrilla a lenha, tomatinhos confit, alho confitado e pesto de manjericão)'

    },
    {
        title: 'Entre Costilla (Bananinha)',
        price: 'R$49,90',
        tag: '(Carne entre costela com monese crocante, farofa de biju, aioli e molho chimichurri)'

    },
    {
        title: 'Linguicinha Suína',
        price: 'R$39,90',
        tag: '(Linguicinha suína, farofa de biju e molho chimichurri)'

    },
    {
        title: 'Linguicinha de Cordeiro',
        price: 'R$44,90',
        tag: '(Linguicinha de cordeiro, farofa de biju e molho chimichurri)'

    }

    
]

const grill = [
    {
        title: 'Pollo en la Parrilla',
        price: 'R$59,90',
        tag: '(Sobrecoxa temperada com marinada especial, grelhada na parrilla, +-650g)'

    },
    {
        title: 'Bife de Chorizo',
        price: 'R$89,90',
        tag: '(Um dos cortes mais emblemáticos do churrasco de parrilla, +-450g)'

    },
    {
        title: 'Corte de Cordeiro',
        price: 'R$89,90',
        tag: '(Pernil de cordeiro tenro com quebra da fibra horizontal, +-400g)'

    },
    {
        title: 'Bife de Ancho',
        price: 'R$99,90',
        tag: '(Corte nobre do filé de costela +-450g)'

    },
    {
        title: 'Picanha(Tapa de Cuadril)',
        price: 'R$129,90',
        tag: '(Picanha baby, corte nobre do quadril, +-460g)'

    },
    {
        title: '*Todas as carnes servem até 2 pessoas.',
        price: '',
        tag: ''

    },
    {
        title: '**Todas as carnes acompanham duas guarnições a sua escolha, farofinha e chimichurri.',
        price: '',
        tag: ''

    }

]

const apettizers = [
    {
        title: 'Chouriço Aperitivo (2un) ',
        price: 'R$19,90',
        tag: ''

    },
    {
        title: 'Chouriço Aperitivo (200g)',
        price: 'R$49,90',
        tag: '(Acompanha farofinha de biju e chimichurri)'

    },
    {
        title: 'Cheese Burguer',
        price: 'R$17,90',
        tag: '(Carne 150g grelhada na parrilla, queijo, pão crocante grelhado com aioli)'

    }

]

const sides = [

    {
        title: 'Arroz branco(com Alho ou com Ervas frescas)',
        price: 'R$7,00'
    },
    {
        title: 'Farofinha de Bijú',
        price: 'R$7,00'
    },
    {
        title: 'Cabotiá grelhada en La Parrilla',
        price: 'R$8,00'
    },
    {
        title: 'Tomate grelhado en La Parrilla',
        price: 'R$8,00'
    },
    {
        title: 'Batata Rústica (300g)',
        price: 'R$8,00'
    },
    {
        title: 'Vinagrete',
        price: 'R$8,00'
    },
    {
        title: 'Mix de folhas',
        price: 'R$9,00'
    },
    {
        title: 'Brócolis nacional grelhado en La Parrilla ',
        price: 'R$10,00'
    },
    {
        title: 'Monese Crocante de Batata (É monese mesmo)',
        price: 'R$15,00'
    }
    
]

const sauces = [
    {
        title: 'Chimichurri da casa',
        price: 'R$4,00'
    },
    {
        title: 'Barbecue artesanal',
        price: 'R$4,00'
    },
    {
        title: 'Aioli',
        price: 'R$3,00'
    }

]

const desserts = [
    {
        title: 'Canjica de Milho Branco com paçoquinha e Sorvete',
        price: 'R$14,90'
    },
    {
        title: 'Sorvete Duo',
        price: 'R$14,00'
    }
    

]

export default {sands, toShare, grill, apettizers, sides, sauces, desserts};