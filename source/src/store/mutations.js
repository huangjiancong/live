import Vue from 'vue'

export default {
    INDEX_SET_GRADEANDSUBJECT: (state, option) => {
        state.index.gradeAndSubject = option;
    },
    INDEX_SET_BANNER: (state, option) => {
        state.index.banner = option;
    },
    INDEX_SET_HOTCOURSE: (state, option) => {
        state.index.hotCourse = option;
    },
    INDEX_SET_NEWCOURSE: (state, option) => {
        state.index.newCourse = option;
    },
    COURSEFILTERLIST_SET_GRADEANDSUBJECT: (state, option) => {
        state.courseFilterList.gradeAndSubject = option;
    },
    COURSEFILTERLIST_SET_COURSELIST: (state, option) => {
        state.courseFilterList.courseList = option;
    },
    PRODUCTDETAILS_SET_DETAILS: (state, option) => {
        state.productDetails.details = option;
    }
}
