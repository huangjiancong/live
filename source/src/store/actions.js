import axios from 'axios';

axios.defaults.baseURL = 'http://api.zycourse.com'

export default {
    index_set_gradeAndSubject({ commit }, option) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/base/gradeAndSubject', {}).then((res) => {
                var { data } = res.data;
                resolve(commit('INDEX_SET_GRADEANDSUBJECT', data))
            })

        })

    },
    index_set_banner({ commit }, option) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/hotCourse', { params: { size: 8 } }).then((res) => {
                var { data } = res.data;

                var imgs = [
                    "http://x04.xesimg.com/web/2018/04/20/15242105978472.jpg",
                    "http://s03.xesimg.com/web/2018/03/26/15220327577473.jpg",
                    "http://r04.xesimg.com/web/2018/04/20/15242124782690.jpg",
                    "http://s03.xesimg.com/web/2018/04/24/15245639172076.jpg",
                    "http://x02.xesimg.com/web/2018/04/19/15241257731866.jpg",
                    "http://r02.xesimg.com/web/2018/05/02/15252418488680.jpg",
                    "http://x03.xesimg.com/web/2018/04/13/15235890277649.jpg",
                    "http://r01.xesimg.com/web/2018/04/27/15248381132538.jpg"
                ];

                data.forEach((item, index) => item.cover = imgs[index]);
                resolve(commit('INDEX_SET_BANNER', data))

            })




        })

    },
    index_set_hotCourse({ commit }, option) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/hotCourse', { params: { size: 12 } }).then((res) => {
                var { data } = res.data;
                resolve(commit('INDEX_SET_HOTCOURSE', data))
            })

        })

    },
    index_set_newCourse({ commit }, option) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/newCourse', { params: { size: 12 } }).then((res) => {
                var { data } = res.data;
                resolve(commit('INDEX_SET_NEWCOURSE', data))
            })

        })

    },
    courseFilterList_set_gradeAndSubject({ commit }, option) {

        return new Promise((resolve, reject) => {

            axios.get('/h5api/base/gradeAndSubject', {}).then((res) => {
                var { data } = res.data;
                resolve(commit('COURSEFILTERLIST_SET_GRADEANDSUBJECT', data))
            })

        })

    },
    courseFilterList_set_courseList({ commit }, { grade, subject }) {

        return new Promise((resolve, reject) => {
            // http://api.zycourse.com/h5api/queryCourse?grade=&orgId=&subject=&pageNo=1&pageSize=10&over=false

            axios.get('/h5api/queryCourse', {
                params: {
                    orgId: '',
                    grade,
                    subject,
                    pageSize: 99
                }
            }).then((res) => {
                var { data } = res.data;
                resolve(commit('COURSEFILTERLIST_SET_COURSELIST', data.list))
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
