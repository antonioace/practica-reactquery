import axios from 'axios'
import React from 'react'

//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
export const githubApi=axios.create({
    baseURL:"https://api.github.com/repos/facebook/react",
    headers:{
        Authorization:"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"

    }
})