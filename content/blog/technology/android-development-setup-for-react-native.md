---
layout: post
title: Setup Android Development environment for React Native apps in Windows
tags: React-Native React Android Windows Technology Web
categories: [blog, technology]
date: '2017-04-06'
---

React Native is a framework built by Facebook to build native apps using React. React Native is built around the objective - learn once, write anywhere.

Though lot of plugins and modules are still in active development, it gained lot of popularity along with React. Facebook uses React Native in lot of their production apps. Lot of UI and utility libraries are already available for React Native.

In this blog, we are going to setup an Android Development environment for React Native apps in Windows.

## System requirement

- Microsoft® Windows® 8/7/Vista/2003 (32 or 64-bit)
- 2 GB RAM minimum, 4 GB RAM recommended
- 400 MB hard disk space + at least 1 G for Android SDK, emulator system images, and caches
- 1280 x 800 minimum screen resolution
- Java Development Kit (JDK) 7
- Optional: Intel® processor with support for Intel® VT-x, Intel® EM64T (Intel® 64), and Execute \* Disable (XD) Bit functionality

## Dependencies

- Install [Node](https://nodejs.org/en/download/)
- Install [Python2](https://www.python.org/downloads/)
- Install [React Native CLI](https://www.npmjs.com/package/react-native-cli)
- Install [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- Install [Android SDK](https://developer.android.com/studio/index.html)

After you install Android Studio, open SDK Manager and make sure the following packages are installed as well.

Under Show Package Details tab, in Android 6.0 (Marshmallow) or Higher. The following should be enabled

- Google APIs
- Intel x86 Atom System Image
- Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom_64 System Image

## AVD Setup

You can either run your React Native app directly in you mobile phone by connecting it to the PC or use a virtual emulator aka AVD: Android Virtual Device.

#### To create an AVD

1. Open Android Studio
2. Got to Menu bar and select AVD Manager
3. You can manage your AVD's from here

Once you setup your AVD(emulator) you can launch it directly from terminal.

To list down all the emulators

> emulator -list-avds

To launch your emulator

> emulator -avd emulator-name

## Project setup

Now that we have installed all the prerequisites for our React Native app. Lets set up a sample project.

> react-native init SampleProject

React Native init is a bootstrap command to setup everything you needed for your app.

## How to run

You have to run the server separately in a terminal and execute your app separately in a terminal. In the recent version, both terminals are launched by one command

> react-native start

If you don't see the emulator and server starting separately. Open a new terminal and execute the command

> react-native run-android

You SampleProject should launch in the emulator now. To refresh the app

> Press F2 or Ctrl + M or Ctrl + R
