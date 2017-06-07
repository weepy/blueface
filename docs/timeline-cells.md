# [KRFT Docs](/docs) :: Timeline Cells 


Timelines are sequences of musical notes that play a particular Instrument.

For convenience, in KRFT we use the term **Loop** to refer to a Timeline that is toggled on/off (i.e. it will look be a solid color) and **Fill** to refer to a Timeline that is only active when being touched (it will look outlined)

When editing a timeline cell, there are three tabs at the top

- [Keyboard / Drumpads](#keyboard)
- [Matrix](#matrix)
- [Timeline Settings](#timelinesettings)

There's also the Sound Settings accessible from the keyboard tab

- [Sound Settings](#soundsettings)


---


<a name='keyboard'></a>

## Keyboard / Drum Pads 

This page is used to record riffs and drum beats into the timelines using the Keyboard or Drum pads interface.

- **Toggle** **Sound** - use the left and right arrows to change the selected preset

- **[Sound Settings](#soundsettings)** - press to tweak the sound

- **Clear** - Delete all notes in the loop and resets the length to 1 bar.

- **Quantize** - By default KRFT records as you play, but there's a handy feature to "live quantize" your playing and recording. Sometimes you'll want to turn this on. Just tap the Quantize button to choose from 1/16, 1/8 and OFF. NB there will be some perceived lag (although this is just KRFT making a best case guess at your intention)

- **Velocity** - Controls for the velocity settings of the preset. The vertical position when tap on a key determines the velocity, the top being maximum and the bottom being minimum.

- **Keyboard**
    - **Chord** - Adjust the Chord setting so you can play a chord with just one key. Some presets are monophonic, in this case the setting will be grayed out.

    - **Octave** - Shifts the pitch of the keyboard.

    - **Chromatic** - Switches the keyboard between scaled and chromatic mode.

    - **Spread** - Delays the chord keys in order to create a slight arpeggion or live feel. 



- **Record** - Tap the record button and start playing when you're ready, the app will automatically start recording. When you're finished press the tick icon. Your loop will be automatically truncated to a bar length of 1,2,4,8,16 and so on.

> **KRFT TIP**
>
>
> You can overdub your recording. Just press record again and play over the top!
‍>

---

<a name='soundsettings'></a>

## Sound Settings

Tweak parameters on the synth or drums. Use the tabs at the top to navigate the categories of tweaks e.g. Waves, Distortion, Filter etc.

Use the keyboard at the bottom of the page to preview your changes.


---

<a name='matrix'></a>

## Matrix

Use the matrix to draw in beats and melodies or correct mistakes you made whilst recording.

- **Clear** - Delete all notes in the loop and resets it's length to 1 bar.

- **Length** - Change the length of the loop.

- **Grid** - What time interval notes will snap to when you're drawing notes in.

- **Chromatic** - Switches the matrix between scaled and chromatic mode.

- **Preview** - Whether or not to play an audio preview when you draw or move a note.

> **KRFT TIP**
>
>
> Change the velocity of a note by dragging up and down on the end of the note.
‍>

-----

<a name='timelinesettings'></a>

## Timeline Settings

On this page you can adjust the advanced settings for the Timeline.

- **Interaction** - The interaction required to run the timeline on & off
    - **Toggle** -  Tap the cell to toggle it on or off (Sticky)
    - **Tap** -  Press and hold on the Cell to play it. It will turn off when you let go. (Nonstick)

- **Synchronization** -  Controls how the timeline will align with the master beat.
    - **Master** -  Sync with the longest loop playing
    - **1/16** - Align the beginning of the timeline to the next 16th note
    - **1/8** - Align the beginning of the timeline to the next 8th note.
    - **1/4** - Align the beginning of the timeline to the next quarter note.
    - **Off** -Start the timeline immediately without any synchronization.

- **Cue** - Controls when the timeline will start/stop.
    - **1/16** - Start/stop on the next 16th note.
    - **1/8** - Start/stop on the next 8th note.
    - **1/4** - Start/stop on the next quarter note.
    - **1 Bar** - Start/stop on the beginning of the next bar.
    - **Off** - Start the timeline immediately.

- **Mix Mode** - How the timeline interacts with other timelines on the same instrument (siblings).
    - **Blend** - Mix with other siblings playing
    - **Solo** - Other siblings will turn off white this is active
    - **Solo hold** - Similar to Solo, but on the siblings with the Hold option are effected.
    - **Loop Count** - The number of times the loop will play before turning itself off. By default it is set to play forever

- **Turn off on exit** - If the cell turns off when you exit the touch area

---

## Related Videos


### Mix Mode

<div class="vid" src="40XJM0kk0a8"></div>

### Interaction, Sync, Cue

<div class="vid" src="3rmyCseIQb4"></div>

---------


Next [The Keyboard >>](the-keyboard)