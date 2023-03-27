import { Category } from '../Types/Category';

export const categories: Category = {
    food: { title: "Alimentação", color: "#590202", expense: true },
    clothing: { title: 'Roupas', color: "#BF0404", expense: true},
    internet: { title: 'Internet', color: "#23828C", expense: true },
    salary: { title: 'Salário', color: "#32A670", expense: false },
    illness: { title: 'Doença', color: "#fdfd96", expense: true },
    investments: { title: 'Investimentos', color: "#ffff00", expense: true},
    sales: { title: 'Vendas', color: "#008000", expense: false },
    others: { title: 'Outros', color: "#120a8f", expense: true },
};

