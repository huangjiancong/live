import axios from 'axios';

axios.defaults.baseURL = 'http://api.zycourse.com'

export default {
    index_set_newCourse({ commit }, option) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/newCourse', { params: { size: 99 } }).then((res) => {
                var { data } = res.data;
                resolve(commit('INDEX_SET_NEWCOURSE', data))
            })

        })

    },
    productDetails_set_details({ commit }, { courseId }) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/courseDetail', { params: { courseId: courseId } }).then((res) => {
                var { data } = res.data;
                resolve(commit('PRODUCTDETAILS_SET_DETAILS', data))
            })

        })

    }
}
