import Vue from 'vue'

export default {
    WINDOW_SET_WIDTH: (state, option) => {
        state.window.width = option;
    },
    WINDOW_SET_HEIGHT: (state, option) => {
        state.window.height = option;
    },
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
    },
    ABOUT_SET_RESOURCESIMG: (state, option) => {
        state.about.resourcesImg = option;
    },
    ABOUT_SET_QRCODEIMG: (state, option) => {
        state.about.qrcodeImg = option;
    }
}
