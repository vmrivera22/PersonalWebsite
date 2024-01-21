This Project was part of my senior capstone project.

## **Technology:**

---

### _Hardware:_

> - **Raspberry Pi 3B+:**
>   - Used to hold code that controlls hardware components and connect to the smartphone via WiFi and Bluetooth.
>     ` `  
>     ` `  
>     ` `
> - **Adafruit MPR121 Touch Sensor:**
>   - A module that detects if if a wire connected to it is being touched. Used to detect tampering if held for over 5 seconds.
>     ` `  
>     ` `  
>     ` `
> - **Neo 6m GPS Receiver:**
>   - A module to get GPS coordinates. Used to track the lock in case its stolen.
>     ` `  
>     ` `  
>     ` `
> - **LEDs:**
>   - Used in concurrence with the alarm to emphasize and make a stolen/tampered bike more noticable.
>     ` `  
>     ` `  
>     ` `
> - **Adafruit STEMMA Speaker:**
>   - Used as an alarm to play a high pitched beep if tampered or stolen.

` `  
` `  
` `

### _App: Frontend:_

> - **Javascript**
> - **React Native**
> - **Expo**

` `  
` `  
` `

### _App: Backend:_

> - Node.js
> - Express
> - mongoDB

## **Functionality:**

---

- GPS tracking
- Tampering/Touch detecting
- Unlocking via smartphone app
- Alarm if tampered or cut
- Bluetooth and WiFi connectivity to Smartphone
- Smartphone notifications if tampered or cut

## **Contributions:**

---

> - Wrote the code for the Adafruit MPR121 Touch Sensor that would detect if an input wire was held for more than 5 seconds.
> - Wrote the code for the alarm that would make LEDs quickly blink and a speaker play a beeping sound if the touch sensor detected tampering.
> - Helped wirte code for the GPS module to track the bike lock.
> - Wrote a bluetooth server for the Raspberry Pi to make data transfer between the lock and the bike through bluetooth possible.
> - Helped manage the groups work, set deadlines, and picked up work other group members were struggling with.
