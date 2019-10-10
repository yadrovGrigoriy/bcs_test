
const initialState = {
    investSum: 0,
    currentPeriod: 0,
    rate: [
        {
            title: '3 месяца',
            value: 4.8
        },
        {
            title: '6 месяцев',
            value: 9.28
        },
        {
            title: '1 год',
            value: 13.72
        },
        {
            title: '2 года',
            value: 14.35
        },
        {
            title: '3 года',
            value: 25.69
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INVEST_SUM_CHANGED':
            return {
                ...state,
                investSum: parseInt(action.payload)
            };
        case 'PERIOD_CHECKED':
            return {
                ...state,
                currentPeriod: action.payload
            };
        case 'SUBMIT':
            const total = {
                'Сумма Инвестиций:': state.investSum,
                'Cрок:': state.rate[state.currentPeriod].title,
                'Прибыль:':  getIncomeSum(state) 
            }

            alert(JSON.stringify(total))
            return state    
        default:
            return state;
    }
};

export const getTotalSum = state => {
    const rate = state.rate[state.currentPeriod];
    if (rate) {
        return state.investSum + (state.investSum * rate.value) / 100;
    }
    return state.investSum;
};

export const getIncomeSum = state => {
    const rate = state.rate[state.currentPeriod];
    if (!rate) return 0;
    return (state.investSum * rate.value) / 100;
};

export default reducer;
