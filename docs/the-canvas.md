# The Canvas

In KRFT, users create two-dimensional musical interfaces that we call Canvases. They contain musical elements that called Cells that are colored geometric shapes and control the sound and music through touch and gesture.

The visual style of the cell informs the user of various characterists, in particular the shape, color and style are important.

## Shape

A shape of a Cell indicates its function:


### Timeline
A score of notes that play an instrument e.g. A drum beat or bassline


### Morph
Automates a setting over a set duration e.g. Muting an instrument


### Dial
Can be dragged to adjust a setting e.g. A Filter


### Audio
Plays a loop of audio. Custom audio files can be imported.


### Group
Cues a list of cells to play at the start of the next bar and stop others.

## Color
 
The color of a cell determines the instrument or channel it controls. This will either be a Bass, Lead or Drums instrument or the Master channel (always black).

## Rotation

Cells can be rotated. The rotation of a cell does not affect its function, only visually.

## Labels
You can add text labels to each cell to help you remember their function.

## Cell Interactions
The behaviour of a cell upon user interaction is determined by whether it is a solid color or an outline.

- Solid Cells will change state when you tap them. Dials that are solid will retain their position when touch is released.

- Outlined Cells are only active whilst they are held down. Dials that are outlined will snap-back to their original position when released.


Next : [Timeline Cells](docs/timeline-cells)