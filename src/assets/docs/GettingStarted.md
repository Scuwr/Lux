# Getting Started

---
## Your First Annotation

This will be a step-by-step tutorial for building your first annotation. Begin by opening the link below in a new tab and following along with this guide.

[Lux Home](./)

You should see something like the image below.

![](./assets/images/homepage.png#margin)

The toolbar at the top of the page is slightly different with your username and an additional button with a question mark. This will display a help dialogue with keyboard shortcuts for nearly ever action in Lux. Learning these shortcuts will make annotating stories much quicker.

The panel on the left side is the **Story Navigation Panel** and it has automatically been populated with one story for you to begin annotating. Clicking on this story will populate panel on the right which is your **Annotation Panel**. Open Story ID 1 and you should see what is shown below.

Take some time to read through the story text first. It's okay if you don't understand everything written in these stories.

![](./assets/images/storyid1.png#margin)

---
### A Note on Annotated Graphs

Each annotation will consist of several nodes connected by directed edges. There are four types of nodes that we consider when annotating: 

1. Actual Events with a Physical Concept - i.e. an event that actually occured in and had a true physical effect
2. Actual Events with an Abstract Concept - i.e. an event that actually occured but the effect was abstract in nature
3. Hypothetical Events with a Physical Concept - i.e. an event that could occur but did not, and would result in a true physical effect
4. Hypothetical Events with an Abstract Concept - i.e. an event that could occur but did not, and would result in an effect that was abstract in nature

There are also two types of edges:

1. Causal Edges which represents a causal relationship such as X causes Y
2. Temporal Edges which represents a sequence of events that have no causal relationship

*Note, a casual edge also implies that X temporally preceeds Y

---
### Creating Your First Graph

Having read the story above, you may notice that it's about a complex hypothetical event stemming from contradictory language in an aircraft flight manual. While it may not be immediately apparent the story the author attempts to convey, after close inspection it is a hypothetical situation that could occur if a flight crew were only to be aware of Appendix A1 in a specific weather condition. So to start, we will create our first node to set the stage for this hypothetical situation.

1. Click the **+ Node** button on the top-left of the toolbar belonging to the **Annotation Panell**, or press the \[N\] key on your keyboard. The dialogue box below should be displayed in the center of the screen.

![](./assets/images/newnode.png#margin)

2. Type in the text box labelled 'New Name' the following:

    ```Wet runway conditions with field elevation of 50 ft and 15 degrees celsius outside air temperature```

 3. Now slide the 'Hypothetical Event' slider to the right but leave the 'Abstract Concept' slider as is to indicate that this node is a hypothetical, real-world concept.

![](./assets/images/newnodetext.png#margin)

4. Pressing the \[Enter\] key or clicking the confirm button will create the new node.

![](./assets/images/newnodecreated.png#margin)

5. Now create a second node and type:

    ```Appendix A1 indicates 5000 ft of runway required for safe takeoff```

6. This is an abstract concept, but also an actual event as it is actually written the Gulfstream Airplane Flight Manual. Set the node to be an Actual Event of an Abstract Concept. If you accidentally create a node before setting these options, you can also select the node and use the hotkeys of \[A\] or \[H\] to toggle Abstract Concept and Hypothetical Event, respectively, or use the Rename button to return to the Node Dialog. Your graph should now look like this:

![](./assets/images/secondnode.png#margin)

7. To create another Abstract node with a directed edge from anything other than the most recently created node, click on that node. To set up the contradiction at the center of this story, click the first node. Notice it is now highlighted a different color. Now create a new node again with this text:

    ```Chapter 5 requires 4200 feet of runway for the accelerate-go, but requires 6400 feet for the accelerate-stop.```

![](./assets/images/thirdnode.png#margin)

8. Now create an Actual, Physical node with that reads:

    ```Gulfstream promotes the usage of Appendix A1 as an alternative to Chapter 5```

![](./assets/images/fourthnode.png#margin) 

9. We want to link the two Abstract nodes as dual contributors to the node we just created. To do this, click on the node starting with ```Appendix A1``` and then click the node that just created. It should look like this.

![](./assets/images/linknode.png#margin) 

10. For human readers, its easy to infer the implications of this contradiction. However, to the computer that we wish to train, we need to treat it as though it has child-like reasoning capabilities, so we need to directly state what is infered. To do this, we will create a Hypothetical, Physical node after the node starting with ```Gulfstream``` that states:

    ```Aircrew not aware of Chapter 5 uses Appendix A1 to determine takeoff requirements```

![](./assets/images/fifthnode.png#margin) 

11. We need to complete the rest of the implication, but we are also running out of space as the graph scrolls to the right. Click the purple button with the double arrows to change the direction the graph flows from horizontal to vertical. To create even more space, we can also click the blue down arrow or press the \[S\] key to hide the story text box above. The picture below shows what it looks with both those options enabled.

![](./assets/images/hidestory.png#margin) 

12. Now we can add the remainder of the hypothetical nodes as shown in the graphic below.

![](./assets/images/fullgraph.png#margin)

13. With all the nodes properly labelled, there is one last change needed to complete the graph. Note that the ```Accelerate-stop is required``` is not caused by the previous node. Instead, it has some unknown cause, which happens quite often in ASRS stories. In this case, we need to make the edge *Temporal* to show there is no causal relationship. Do this by clicking the preceeding node, and then clicking the ```Accelerate-stop``` node. This will toggle the edge type from *Causal* to *Temporal*. The same mechanic can be used to convert it back to a *Causal* edge.

![](./assets/images/temporaledge.png#margin)

14. Finally, you can click the button with the eye with a slash through it, or press the \[L\] key to toggle label visibility. This is helpful if you forget what node types are which.

![](./assets/images/labels.png#margin)

Now you know everything about the mechanics of creating annotations. Next, you can learn about the rules of annotating on the [Making Good Annotations](./docs/MakingGoodAnnotations) Doc page.

---
## Find any bugs?

If you have any suggestions or notice any bugs, please create an issue on our [Github page](https://github.com/Scuwr/Lux/issues) and tag it with the **suggestion** or **bug** label.