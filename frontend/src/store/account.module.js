import {  
    getAccount, 
    getAccountById, 
    deleteAccountById, 
    createAccount, 
    updateAccountById,
    updateBalanceAccountById
    
} from '../services/account.service'


export default {
    state: {
        accounts: []
    },
    getters: {
        getAccount: state => {
            return state.accounts;
        },
        getBalanceInRub: state => {
            const accountsInRub = state.accounts.filter(cur => cur.account_currency === 'RUB');
            console.log("accountsInRub", accountsInRub);
            const balanceInRub = accountsInRub[0].current_balance
            return balanceInRub;
        },
        getFinancialGoalInRub: state => {
            const accountsInRub = state.accounts.filter(cur => cur.account_currency === 'RUB');
            const financialGoalInRub = accountsInRub[0].financial_goal
            return financialGoalInRub;
        },
        persentageFullfilment:state => {
            const accountsInRub = state.accounts.filter(cur => cur.account_currency === 'RUB');
            console.log(accountsInRub);
            const balanceInRubVuex = accountsInRub[0].current_balance  
            const financialGoalInRub = accountsInRub[0].financial_goal
            const persentageDone = (balanceInRubVuex / financialGoalInRub ) * 100
            const per = Math.round(persentageDone)
            return per 
        },
        getAccountIDInRub: state => {
            const accountsInRub = state.accounts.filter(cur => cur.account_currency === 'RUB');
            const AccountID = accountsInRub[0]._id
            return AccountID;
        },


    },
    mutations: {
        createAccount (state, payload) {
            state.accounts.push(payload)
          },
        setAccount (state, payload) {
            state.accounts = payload
        }

    },
    actions: {
        async createAccount({commit, dispatch}, 
            {
                account_currency,
                current_balance,
                financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const newAccount = await createAccount({
                    account_currency,
                    current_balance,
                    financial_goal
                  })
                  console.log('New Account in request', newAccount);
                  commit('createAccount', newAccount) 
                  dispatch('getAccount')
                  commit('setLoading', false)
                  return newAccount
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                throw error;
            }
        },
        async getAccount({commit}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const Account = await getAccount()
                commit('setAccount', Account) 
                commit('setLoading', false)
                return Account;
            } catch (error) {                
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)

                throw error;
            }
        }, 
        async getAccountById({commit}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await getAccountById({_id})
                  console.log('Account by ID from request', AccountById);
                  commit('setLoading', false)
                return AccountById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async deleteAccountById({commit, dispatch}, {_id}) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await deleteAccountById({
                    _id
                })
                console.log('Account by ID from request was deleted', AccountById);
                dispatch('getAccount')
                commit('setLoading', false)
                return AccountById;
            } catch (error) {
                console.log('err', error)
                console.log('err', error.response.data.stack)
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                
                throw error;
            }
        },
        async updateAccountById({commit, dispatch}, {
            _id,
            account_currency,
            current_balance,
            financial_goal
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await updateAccountById({
                    account_currency,
                    current_balance,
                    financial_goal
                },{_id})
                  console.log('Account by ID from request was updated', AccountById);

                dispatch('getAccount')
                commit('setLoading', false)
                return AccountById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        async updateBalanceAccountById({commit, dispatch}, {
            _id,
            current_balance,
            }) {
            try {
                commit('clearError')
                commit('clearInfo')
                commit('setLoading', true)
                const AccountById = await updateBalanceAccountById({
                    current_balance,
                },{_id})
                  console.log('Account by ID from request was updated', AccountById);
                dispatch('getAccount')
                commit('setLoading', false)
                return AccountById;
            } catch (error) {
                commit('setError', error.response.data.message)
                commit('setLoading', false)
                console.log('err', error.response.data.message)
                console.log('err', error.response.data.stack)
                throw error;
            }
        },
        

    }
};