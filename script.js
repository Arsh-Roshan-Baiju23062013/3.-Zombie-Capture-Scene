AFRAME.registerComponent('zombie', {
    init: function () {
        const parts = [
            { position: '0 2.2 0', width: 0.5, height: 0.5, depth: 0.5, color: '#4f7a36' },
            { position: '0 2.46 0.05', width: 0.52, height: 0.1, depth: 0.52, color: '#2d421e' },
            { position: '-0.15 2.25 0.23', width: 0.08, height: 0.08, depth: 0.08, color: '#cc1111' },
            { position: '0 1.3 0', width: 0.7, height: 1.2, depth: 0.4, color: '#2b5175' },
            { position: '-0.45 1.7 0.35', width: 0.18, height: 0.18, depth: 0.9, color: '#4f7a36' },
            { position: '0.45 1.7 0.35', width: 0.18, height: 0.18, depth: 0.9, color: '#4f7a36' },
            { position: '-0.2 0.35 0', width: 0.22, height: 0.7, depth: 0.3, color: '#1a2d42' },
            { position: '0.2 0.35 0', width: 0.22, height: 0.7, depth: 0.3, color: '#1a2d42' }
        ];

        parts.forEach(function (part) {
            const box = document.createElement('a-box');
            box.setAttribute('position', part.position);
            box.setAttribute('width', part.width);
            box.setAttribute('height', part.height);
            box.setAttribute('depth', part.depth);
            box.setAttribute('color', part.color);
            this.el.appendChild(box);
        }, this);
    }
});

AFRAME.registerComponent('zombie-spawner', {
    schema: {
        count: { type: 'int', default: 5 }
    },

    init: function () {
        const minX = -50;
        const maxX = 50;
        const minZ = -45;
        const maxZ = 45;

        for (let i = 0; i < this.data.count; i++) {
            const zombie = document.createElement('a-entity');
            zombie.setAttribute('zombie', '');
            const x = Math.random() * (maxX - minX) + minX;
            const z = Math.random() * (maxZ - minZ) + minZ;
            zombie.setAttribute('position', `${x} 64 ${z}`);
            this.el.appendChild(zombie);
        }
    }
});
