
import http from '../../api/query'
export default {
    state: {
        workList: [],
        page: null
    },
    getters: {
        workListGetter(state) {
            return state.workList
        },
        pageGetter(state) {
            return state.page
        }
    },
    mutations: {
        set_work_data: (state, { data, currentPage }) => {
            state.workList = data.works
            state.page = {
                count:data.works_count,
                current_page:Number(currentPage),
                max_page:data.works_max_page
            }
            
        }
    },
    actions: {
        queryWorkData: ({ commit }, { currentPage }) => {
            return http.work({
                current_page: currentPage,
                page_size: 5,
            }).then((res) => {
                if (res.return_code === 0) {
                    const data = res.data
                    commit('set_work_data', { data, currentPage })
                }
            })
        }
    },
};
