# [KRFT Docs](/docs) :: The Surface

In KRFT, users create two-dimensional musical interfaces that we call **Surfaces**. They contain musical elements that called **Cells** that are colored geometric shapes and control the sound and music through touch and gesture.

The visual style of the cell informs the user of various characterists, in particular the shape, color and style are important.

---

## Shape
A shape of a Cell indicates its function:

<style>
table td {font-size: 12px;}
table td {font-size: 12px;}
.cell { display: inline-block; width: 150px; padding-right: 30px;padding-bottom: 30px;} 
.cell img {  width: 150px;} 

.cell p { font-size: 12px;} 
</style>

<div class="row">
<div class="cell">
<span>Timeline</span>
<img src='../img/loop.jpg'/>
<p>A score of notes that play an instrument e.g. a drum beat or bassline</p>
</div>



<div class="cell">
<span>Morph</span>
<img src='../img/morph.jpg'/>
<p>
A score of notes that play an instrument e.g. a drum beat or bassline
</p>
</div>

<div class="cell">
<span>Dial</span>
<img src='../img/dial.jpg'/>
<p>
A score of notes that play an instrument e.g. a drum beat or bassline
</p>
</div>


<div class="cell">
<span>Audio</span>
<img src='../img/audio.jpg'/>
<p>
A score of notes that play an instrument e.g. a drum beat or bassline
</p>
</div>


<div class="cell">
<span>Group</span>
<img src='../img/group.jpg'/>
<p>
A score of notes that play an instrument e.g. a drum beat or bassline
</p>
</div>
</div>

---

## Color

- The color of a cell determines the instrument or channel it controls.
- This will either be a Bass, Lead or Drums instrument or the Master channel (always black).
- It can also be a MIDI channel

![](../img/color.png)

---


## Rotation

Cells can be rotated. The rotation of a cell does not affect its function, only visually.

---


## Labels

You can add text labels to each cell to help you remember their function.

---

## Cell Interactions

The behaviour of a cell upon user interaction is determined by whether it is a solid color or an outline.

### Solid 
![](../img/solid.png)

- Solid means "sticky" - ie the cell will retain its state after touch interaction is finish
- Solid Cells will change state when you tap them. 
- Dials that are solid will retain their position when touch is released.


### Outlined 
![](../img/outlined.png) 

- Outlined Cells are only active whilst they are held down. 
- Dials that are outlined will snap-back to their original position when released.

---

Next [Timeline Cells >>](../timeline-cells)