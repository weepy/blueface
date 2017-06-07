# [KRFT Docs](/docs) :: The Surface

In KRFT, users create two-dimensional musical interfaces called **Surfaces**. They contain musical elements that called **Cells** --- colored geometric shapes and control the sound and music through touch and gesture.

The visual style of the cell informs the user of various characteristics, in particular the shape, color and style are important.

---

## Shape
The shape of a Cell indicates its function:

<style>
table td {font-size: 12px;}
table td {font-size: 12px;}
.cell { display: inline-block; width: 165px; padding-right: 30px;padding-bottom: 30px;} 
.cell img {  width: 150px;} 

.cell p { font-size: 14px;} 
</style>

<div class="row">
<div class="cell">
<span>Timeline</span>
<img src='../img/loop.jpg'/>
<p>A diamond represents a timeline: a list of notes that play an instrument e.g. a drum beat or bassline</p>
</div>



<div class="cell">
<span>Morph</span>
<img src='../img/morph.jpg'/>
<p>
A triangle represents a Morph: Tweens a setting over a set duration e.g. pitch of a channel down an octave.
</p>
</div>

<div class="cell">
<span>Dial</span>
<img src='../img/dial.jpg'/>
<p>
A circle represents a dial which are dragged to adjust a setting e.g. a Filter. <br><br>
</p>
</div>


<div class="cell">
<span>Audio</span>
<img src='../img/audio.jpg'/>
<p>
An oval represents an Audio clip. Custom audio files can be imported. <br><br><br>
</p>
</div>


<div class="cell">
<span>Group</span>
<img src='../img/group.jpg'/>
<p>
A rectangle represents a Group which cues a list of cells to play at the start of the next bar and stops others.
</p>
</div>
</div>

---

## Color

- The color of a cell determines the instrument or channel it controls.
- When using the internal audio engine, this will either be a Bass, Lead or Drums instrument or the Master channel (always black).
- It can also be a MIDI channel when using external apps or devices.

![](../img/color.png)

---


## Rotation

Cells may be be rotated. The rotation of a cell does not affect its function, only visually.

---


## Labels

You can add text labels to each cell to help you remember their function.

---

## Cell Interactions

The interaction behaviour of a cell is determined by its visual style.

### Solid 
![](../img/solid.png)

- Solid means "sticky" 
- ie the cell will retain its state after the touch interaction is ended
- Solid Cells will toggle state when you tap them. 
- Dials that are solid will retain their position when touch is released.


### Outline
![](../img/outlined.png) 

- Outlined means "non-stick"
- ie the Cell will only be active whilst the touch is held.
- Dials that are outlined will snap-back to their original position when released.

---

## Related Videos

### The Surface 

<div class="vid" src="hqfRW53han0"></div>


### Building your first surface 

<div class="vid" src="h3IloBevUTA"></div>


---

Next [Timeline Cells >>](../timeline-cells)



