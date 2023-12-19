---
type: "post"
title: "Solving Tech Problems Without Code"
description: "I recently saved a small business owner over $100 per month by solving a tech problem without writing any code."
order: "000"
date: "19 Dec 2023"
---

# {{meta.title}}

{{meta.description}}

## The Problem

A local axe throwing venue was spending over $100 per month for custom waiver software so that customers could fill out a waiver before throwing axes. I believed I could replace that software with a free solution that would eliminate the monthly cost, and the owner of the venue was intrigued.

The software had the following requirements:

1. The waiver form needs to be publicly accessible so that a QR code can be created for it
1. The form needs to capture valid email addresses in a way that is easily exported (for follow-up emails)

## The Solution

I created a [Google Form](https://forms.google.com) for the waiver that was populated with the proper legal text and all of the form fields of the existing waiver. I set up the form so that submissions would be captured as rows in a [Google Sheets](https://sheets.google.com) spreadsheet. I grabbed a photo of the venue from their website and used it in the header of the form so that it would match the branding for the business. Once I had the public URL for the Google Form, I generated a [QR code](https://www.qr-code-generator.com) that would link to it.

Google Forms and Google Sheets are both free, so using them costs the business owner nothing. Now he can easily go into the spreadsheet and copy all of the email addresses from a single column and import them into his existing automated email solution.

## Conclusion

In the end, I helped out a local business owner by using my knowledge of existing tools to build a free solution to a costly problem. I didn't have to write any custom code, and now he's saving over $100 per month *for the lifetime of his business*.

*Posted on **{{meta.date}}***
