#include <Arduino.h>

//Analog input pin for the potentiometer
int potentiometer_pin = A0; 

// PWM output pin
int pwm_pin = 3;          


void setup() {
  // Adjusts the pin to input mode
  pinMode(potentiometer_pin, INPUT);
  // Adjusts the pin to output mode
  pinMode(pwm_pin, OUTPUT);

  // Adjusts the PWM frequency to 980.39 Hz.
  // By default arduino PWM frequency is 490.20 Hz, 
  // but this value is not high enough to have a stable DC output voltage in low duty cycles.
  TCCR2B = TCCR2B & B11111000 | B00000011;
}

void loop() {  

  // Reads the voltage of the potentiometer to a value between 0 to 1023
  // The resolution of ADC on Arduino is 10 bits.
  int duty_cycle = analogRead(potentiometer_pin);

  // Maps the value from [0 1023] to [0 255] for the PWM function of Arduino
  int duty_cycle_mapped = map(duty_cycle, 0, 1024, 0, 254);

  // Sets the PWM signal duty cyle value, 0->0%, 254->100%
  analogWrite(pwm_pin, duty_cycle_mapped);
}
