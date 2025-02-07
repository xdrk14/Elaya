document.addEventListener("DOMContentLoaded", function() {
    const imgWrappers = document.querySelectorAll('.img-wrapper');
    const backplate = document.getElementById('backplate');

    imgWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', () => {
            
            backplate.style.display = 'block';

            wrapper.style.zIndex = 5;

            imgWrappers.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.add('blur');
                }
            });
        });

        wrapper.addEventListener('mouseleave', () => {
    
            backplate.style.display = 'none';

            wrapper.style.zIndex = 1;
            imgWrappers.forEach(otherWrapper => {
                otherWrapper.classList.remove('blur');
            });
        });
    });
    backplate.addEventListener('mouseenter', () => {
        backplate.style.display = 'none';

        imgWrappers.forEach(wrapper => {
            wrapper.style.zIndex = 1;
        });

        imgWrappers.forEach(wrapper => {
            wrapper.classList.remove('blur');
        });
    });
});
