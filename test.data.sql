INSERT INTO sound (quote, path, plays) VALUES
    ('General Sound 1', '/Music/0.mp3', 0),
    ('General Sound 2', '/Music/1.mp3', 0),
    ('General Sound 3', '/Music/2.mp3', 0);

INSERT INTO collection (name, owner) VALUES ('General', 0);

-- ("collectionId", "soundId")
INSERT INTO collection_sounds_sound VALUES (1, 2), (1, 3), (1, 4);


