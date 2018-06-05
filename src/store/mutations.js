import Vue from 'vue'

export default {
    INDEX_SET_NEWCOURSE: (state, option) => {
        state.index.newCourse = option;
    },
    PRODUCTDETAILS_SET_DETAILS: (state, option) => {
        state.productDetails.details = option;
    }
}
