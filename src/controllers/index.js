// src/controllers/index.js
import { Application } from "@hotwired/stimulus"
import MaskController from "stimulus-mask"

const application = Application.start()
application.register("mask", MaskController)
