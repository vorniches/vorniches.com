'use strict'

class MainPage {
    constructor() {
        this.html = document.getElementById('html')
        this.body = document.body
        this.app = document.getElementById('app')
        this.aboutString = '<p>/* ---</p>' +
                           '<p>Creating things, solving problems.</p>' +
                           '<p>Doing good job .......... compatible ✔</p>' +
                           '<p>Get started with following links.</p>'
        this.aboutStringCloser = '<p>--- */</p>';
    }

    init() {
        let aboutSection = document.createElement('div')
        this.html.style = 'height: 100%;'
        this.app.style.cssText = 'height:auto;font-size: 19px;line-height: 28px;color: green;letter-spacing: 2px;padding: 0 0 28px 0;font-family: "Inconsolata", Andale Mono, Monaco, Monospace;max-width:600px'
        this.body.style = 'display: flex;height: 100%;overflow: hidden;justify-content: center;align-items: center;'
        this.app.innerHTML = this.aboutString
        this.app.append(aboutSection)
        this.app.innerHTML += '<br>'
        this.setLinks()
        this.app.innerHTML += '<br><br>'
        this.app.innerHTML += this.aboutStringCloser
    }

    setLinks() {
        let github = document.createElement('a')
        let telegram = document.createElement('a')
        let mail = document.createElement('a')
        github.setAttribute('href', 'https://github.com/vorniches')
        github.setAttribute('target', '_blank')
        github.innerText = "github"
        github.className = "link"
        github.style.cssText = 'padding-right:20px;color:green;font-family:"Inconsolata",AndaleMono,Monaco,Monospace'
        telegram.setAttribute('href', 'https://t.me/vorniches')
        telegram.setAttribute('target', '_blank')
        telegram.innerText = "telegram"
        telegram.style.cssText = 'padding-right:20px;color:green;font-family:"Inconsolata",AndaleMono,Monaco,Monospace'
        mail.setAttribute('href', 'mailto:vorniches@gmail.com')
        mail.setAttribute('target', '_blank')
        mail.innerText = "mail"
        mail.style.cssText = 'color:green;font-family:"Inconsolata",AndaleMono,Monaco,Monospace'
        this.app.append(github, telegram, mail)
    }
}

export {MainPage}