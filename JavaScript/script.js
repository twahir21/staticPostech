const beeModal = document.getElementById("bee-model");

const sections = Array.from(document.querySelectorAll("section"));
// store sections in array
const sectionOffsets = sections.map(section => section.offsetTop);
// create new array with offset value relative position of section in pixels, where section is located from top of page

const shiftPositions = [30, -30, 0, 64];
const cameraOrbits = [[45, 45], [-45, 45], [-180, 0], [45, 180]]

const lastSectionIndex = sections.length - 1; // for endpoint;

const interpolate = (start, end, progress) => start + (end - start) * progress;

const getScrollProgress = scrollY => {
    for(let i = 0; i < lastSectionIndex; i++){
        if(scrollY >= sectionOffsets[i] && scrollY < sectionOffsets[i + 1]){
            return i + (scrollY - sectionOffsets[i]) / (sectionOffsets[i + 1] - sectionOffsets[i]);
        }
    }
    return lastSectionIndex;
};

window.addEventListener("scroll", () => {
    const scrollProgress = getScrollProgress(window.scrollY);
    const sectionIndex = Math.floor(scrollProgress);

    const sectionProgress = scrollProgress - sectionIndex;

    const currentShift = interpolate(
        shiftPositions[sectionIndex],
        shiftPositions[sectionIndex + 1] ?? shiftPositions[sectionIndex],
        sectionProgress
    );

    const currentOrbit = cameraOrbits[sectionIndex].map((val, i) => 
        interpolate(val, cameraOrbits[sectionIndex + 1]?.[i] ?? val, sectionProgress)
    );

    beeModal.style.transform = `translateX(${currentShift}%)`;
    beeModal.setAttribute("camera-orbit", `${currentOrbit[0]}deg ${currentOrbit[1]}deg`);


});