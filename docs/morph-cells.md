# [KRFT Docs](/docs) :: Morph Cells

Morph cells can be used to change a specific parameter on an instrument or channel over a specified period of time e.g. Pitch up an instrument an octave over 4 bars, set the volume of a channel instantly.

This is great for jamming and adding variety to a loop.

----


Here's a run down of a morphs' settings:

- **Property** - The parameter that the morph controls on the Channel or Instrument.

- **Default Value** - The current value of this property on the instrument.

- **Target Value** - The value you want to be set when this morph is turned on.

- **Time on** - The duration, in notes, of the morph from *Default Value* to Target Value when activated.

- **Time off** - The duration, in notes, of the morph from *Target Value* to Default Value when turned off.

- **Interaction** - The interaction required to run the morph on & off
    - **Toggle** - Tap the cell to toggle it on or off
    - **Hold** - Press and hold on the Cell to play it. It will turn off when you let go.
    - **Turn off on exit** - If the cell turns off when you exit the touch area.

---

> **KRFT TIP**
> 
> Try overlaying multiple morph cells to produce more complex effects
>


## Modulation

New since 1.5 is Modulation: a way to add oscillation to morphs.

- **Shape** - The shape of the oscillation (either Flat, Square, Sine, Hex, Saw, Reverse Saw, Triangle, Random, Random min/max, Random Value). Flat is equivalent to none.
- **Time** - the number of 1/16th notes to reach maximum amplitude. 
- **Sync** - sync to the interaction, or the bar.

--------

## Related Videos



### Morph Cells

<div class="vid" src="d3Fa1Skva6s"></div>


---------

Next [Transform Cells >>](../transform-cells)
