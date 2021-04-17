// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "stylesheets/application" // Add this line


Rails.start()
Turbolinks.start()
ActiveStorage.start()

import index from '../src/index'
import show from '../src/show'
import destroy from '../src/destroy'
import _new from '../src/new'
import create from '../src/create'
import edit from '../src/edit'
import update from '../src/update'

index()

document.addEventListener('click', function(e){
    //e.preventDefault()
    if(e.target.matches('.post_show')){
        e.preventDefault()
        show(e)
    }

    if(e.target.matches('.post_destroy')){
        e.preventDefault()
        destroy(e)
    }

    if (e.target.matches('.post_new')) {
        e.preventDefault()
        _new()
    }

    if (e.target.matches('.post_edit')) {
        e.preventDefault()
        edit(e)
    }
})

document.addEventListener('submit', function(e) {

    e.preventDefault()
    if (e.target.matches('#post_create')) {
        e.preventDefault()
        create(e)
    }

    if (e.target.matches('#post_edit')) {
        e.preventDefault()
        update(e)
    }

}) 