# [KRFT Docs](/docs) :: Using Midi

## Using MIDI in KRFT

Sending MIDI from KRFT to other apps, desktop software and hardware is simple to set up and extremely powerful. You can send MIDI to any app that supports CoreMIDI, Audio Bus 3 & to external software and hardware e.g. example Ableton & Logic Pro. 

----

## Get started using MIDI with KRFT

1. You need to create a MIDI channel: first create a new cell 
2. On the Select Panel dialogue tap [+ Channel], tap MIDI from the list. 
3. Select a Device to send the MIDI messages to: Tap the MIDI plug icon to open the MIDI Channel Settings dialogue. 
4. Cycle through all available Devices that KRFT can communicate with and select it.



If your Device isn’t listed, you’ll need to ensure set up the connection .

--- 

See below for guides on setting up MIDI with different destinations


- [iOS Apps](#midi2iosapps)
- [Audio Bus 3](#midi2audiobus3)
- [Sending MIDI to a Mac](#midi2mac)
- [Sending MIDI to Winoddws](#midi2windows)
- [Ableton](#midi2ableton)
- [Logic Pro X](#midi2logicprox)
- [Other desktop software](#otherdesktopsoftware)
- [Using MIDI directly with hardware](#midi2hardware)

----

<a name="midi2iosapps"></a>

## MIDI to other iOS Apps
Any app that supports CoreMIDI should be compatible with KRFT. See here for a list of MIDI capable apps. 

To send MIDI from KRFT to another app just launch the other app and then select that app in the MIDI Device list with KRFT. 

Tips 
Most apps have a Background Audio setting that allows them to continue producing audio whilst they are in the background. Make sure you turn this on!
Some apps need to be configured to allow external MIDI input. If you’re having trouble using a particular app with KRFT check to see that the target app is configured correctly.

---

<a name="midi2audiobus3"></a>
## Audio Bus 3

KRFT has 8 MIDI outputs that can be used within AudioBus. To get started add one of KRFTs Audiobus MIDI outputs e.g. (Audiobus #1) to the top of an AudioBus MIDI chain. 

IMPORTANT! You’ll also want to add KRFT as an Audio Input in AudioBus otherwise you won’t be able to hear audio from with KRFT.

Then from within KRFT you’ll be able to select “AudioBus #1” from the MIDI Channel Settings dialogue. One that’s set up you can add another app as the MIDI Receiver in AudioBus.

> **Tip**
>
>  When using KRFT as a MIDI Sender in AudioBus you can only send MIDI to other apps from with AudioBus. 
>  You can insert MIDI effects into AudioBus for more variety and combinations
>

--- 

<a name="midi2mac"></a>

## Sending MIDI to a Mac

There are multiple ways to send MIDI to desktops or laptops. We recommend using a lightning cable for the easiest and most straightforward solution.

### Lightning Cable
The most solid and low latency method is to use a lightning cable from your iPhone or iPad directly into your Mac. You’ll also need to download some MIDI bridge software to both devices. 

We’ve found that midimittr to be both simple to setup and reliable. Download the Mac software from this page => [http://www.s-r-n.de/midile/](http://www.s-r-n.de/midile/). The iOS app is available here => [https://itunes.apple.com/gb/app/midimittr/id925495245?mt=8](https://itunes.apple.com/gb/app/midimittr/id925495245?mt=8)

Another solution is MidiMux & StudioMux that works in a similar way.

###  Camera Connection Kit

TBD


###  Bluetooth
Using bluetooth to send MIDI between iOS and Mac has slightly more latency than a wired connection but doesn’t require an intermediate app. 

- First you’ll need to pair your devices:
- Ensure Bluetooth is enabled on both your iOS device and Mac
- Go to *Bluetooth Preferences* on your Mac and you should see a list of available devices. Click *Pair* next to the device you want to pair with and follow onscreen instructions. If you don’t see your device in the list 
- Open *Audio MIDI Setup* on your Mac. You can find this either by searching in the spotlight or opening it from your Applications folder.
- At the top of this window double click the Bluetooth block. This will open another window that will find available devices within range. If no window appears click Window on the toolbar and click Show MIDI Studio.
- .. can’t get this to work ????

###  Wifi
You can also connect via local WiFi network, however stability and latency is questionable. If you’d like to give it a try there is a great tutorial over at Music App Blog on how to set up a wireless network to transmit MIDI data between your iPad and Mac => [http://musicappblog.com/wireless-network-midi-ipad-to-mac/ ](http://musicappblog.com/wireless-network-midi-ipad-to-mac/ )

---

<a name="midi2windows"></a>

## Sending MIDI to Windows

Use Midimittr or Midimux to connect.


### Via Wifi

- Install and run Apple [Bonjour](https://support.apple.com/downloads/bonjour_for_windows)
- Install [rtpMIDI](https://www.tobias-erichsen.de/software/rtpmidi.html) by Tobias Erichsen which offers Core MIDI features for Windows
- See also the [tutorial](http://www.tobias-erichsen.de/software/rtpmidi/rtpmidi-tutorial.html)



### Via USB

> MIDI via USB is currently only supported on the iPad
>

- Use the Apple Camera Connection Kit to connect it with a USB Midi Interface such as iRig


---

<a name="midi2ableton"></a>

## Ableton Live

### MIDI learn

See "Using MIDI" video below for an explanation of MIDI Learn in Ableton

---

<a name="midi2logicprox"></a>

## Logic Pro X

Logic Pro X does have some issues in dealing with MIDI over multiple channels, but it can be resolved. 
See here [https://discussions.apple.com/thread/5174298?tstart=0](https://discussions.apple.com/thread/5174298?tstart=0)
and [https://forum.audiob.us/uploads/editor/ij/24nwl6nun1u4.jpeg](https://forum.audiob.us/uploads/editor/ij/24nwl6nun1u4.jpeg)


---

<a name="midi2hardware"></a>

## Using MIDI directly with Hardware

Hardware can of course be powered from KRFT via your DAW which would be a typical setup. However it’s possible to directly power the hardware from KRFT using a CoreMidi and a Camera connection kit for USB devices. To connect with older MIDI DIN cables, you need a converter such as iRig. 



---

## Related Videos

### Using MIDI 

<div class="vid" src="4h6CW2ahMqs"></div>


----

Next [Using Link >>](../using-link)