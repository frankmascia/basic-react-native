
# St Charles Automotive Car Reservation Challenge

A short React Native application that allows the client to capture user information, vehicle information, and adds a preferred time slot

*** Important**
All commands were executed on a Windows operating system, with the target device being Android, as I currently do not have access to a Mac.


## How to Run the app

First Start Metro bundler with the command:  

`npx react-native start`

Then run the application on an Android Emulator / Device with the command:  

`npx react-native run-android`

note, make sure your device has usb debugging enabled (through developer mode) and run the command

`adb devices` 

to make sure your device is listed.


## More Info / Configuration Issues

I chose to build the project using the React Native CLI instead of the Expo Go framework to keep things as basic and flexible as possible, I opted for this approach. This decision led to a few setup challenges due to the presence of multiple JDK versions I already have installed for native Android development.

in the `gradle.properties` file I had to specifically set `org.gradle.java.home=C:/Program Files/Java/jdk-17` to get a successful build, so whoever is testing may also need to have JDK 17 installed on their test environment or modify that line to include whatever JDK you have installed between 17 and 20.

Following that, I also modified the `android/gradle/gradle-wrapper.properties file` by specifying `distributionUrl=https\://services.gradle.org/distributions/gradle-8.8-all.zip` to use a compatible Gradle version

If there are any issues after configuring, the command `./gradlew clean` may be of assistance. 
## Immediate Future Add Ons / Fast Follows

If I were to further develop this project, there are a few things I would absolutely like to build upon: implementing something like Axios to communicate with a backend, I'd start to evaluate and consider using an actual form library such as formik or react hook form, and zod for form validation (if the use case and complexity called for it) - and I'd also expand upon the `TimeSlotForm` component. I'd much rather have this be a clickable component that opens up a dialog showing which time slots are available and which are taken, and allow the user to select one and send it as part of the form data. Implementing these for the challenge felt a bit overkill but on the flip side, having an awareness of them during planning can help make better and more informed decisions.  