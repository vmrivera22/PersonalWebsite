This Project was part of my senior capstone project.

## **Technology:**

---

### _Hardware:_

> - **Raspberry Pi 3B+:**
>   - Used to hold code that controls hardware components and connect to the smartphone via WiFi and Bluetooth.
>     ` `  
>     ` `  
>     ` `
> - **Adafruit MPR121 Touch Sensor:**
>   - A module that detects if a wire connected to it is touched. Used to detect tampering if held for over 5 seconds.
>     ` `  
>     ` `  
>     ` `
> - **Neo 6m GPS Receiver:**
>   - A module used to get GPS coordinates. Coordinates used to track the lock if it's stolen.
>     ` `  
>     ` `  
>     ` `
> - **LEDs:**
>   - Used in concurrence with the alarm to emphasize and make a stolen/tampered bike more noticeable.
>     ` `  
>     ` `  
>     ` `
> - **Adafruit STEMMA Speaker:**
>   - Used as an alarm to play a high-pitched beep if tampered with or stolen.

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
- Unlocking via a smartphone app
- Alarm if tampered or cut
- Bluetooth and WiFi connectivity to Smartphone
- Smartphone notifications, if tampered with or cut

## **Contributions:**

---

> - Wrote code for the Adafruit MPR121 Touch Sensor to detect if an input wire was held for more than 5 seconds.
> - Wrote code that made LEDs quickly blink and a speaker play a beeping sound if the touch sensor detected tampering.
> - Helped write code for the GPS module to track the bike lock.
> - Wrote a Bluetooth server for the Raspberry Pi to allow data transfer between the bike lock and the bike through Bluetooth.
> - Helped manage the group's work, set deadlines, and picked up work other group members struggled with.
