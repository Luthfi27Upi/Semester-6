#include <Arduino.h>

void setup()
{
  Serial.begin(115200); // set baudrate 115200
}

void loop()
{
  Serial.println("Hello world"); // menampilkan string ke serial monitor
  delay(1000);                   // jeda 1000 ms (1 detik)
}